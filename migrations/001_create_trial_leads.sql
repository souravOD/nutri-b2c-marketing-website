-- =============================================================
-- Migration: Create b2c_marketing_trial_leads table
-- Schema: gold
-- Purpose: Store free trial lead data from marketing website,
--          completely isolated from enrolled b2c_customers.
-- =============================================================

CREATE TABLE gold.b2c_marketing_trial_leads (
    id                  uuid DEFAULT gen_random_uuid() NOT NULL,
    first_name          character varying(100) NOT NULL,
    last_name           character varying(100) NOT NULL,
    email               character varying(255) NOT NULL,
    source              character varying(50) DEFAULT 'marketing-website'::character varying NOT NULL,
    status              character varying(20) DEFAULT 'pending'::character varying NOT NULL,
    agreed_terms        boolean DEFAULT true NOT NULL,
    email_resend_count  integer DEFAULT 0 NOT NULL,
    last_resend_at      timestamp without time zone,
    converted_customer_id uuid,
    ip_address          character varying(45),
    user_agent          text,
    created_at          timestamp without time zone DEFAULT now() NOT NULL,
    updated_at          timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT b2c_marketing_trial_leads_pkey PRIMARY KEY (id),
    CONSTRAINT b2c_marketing_trial_leads_email_key UNIQUE (email),
    CONSTRAINT b2c_marketing_trial_leads_status_check CHECK (
        ((status)::text = ANY (ARRAY[
            ('pending'::character varying)::text,
            ('email_sent'::character varying)::text,
            ('clicked'::character varying)::text,
            ('converted'::character varying)::text,
            ('expired'::character varying)::text
        ]))
    ),
    CONSTRAINT b2c_marketing_trial_leads_source_check CHECK (
        ((source)::text = ANY (ARRAY[
            ('marketing-website'::character varying)::text,
            ('landing-page'::character varying)::text,
            ('referral'::character varying)::text,
            ('social'::character varying)::text
        ]))
    )
);

COMMENT ON TABLE gold.b2c_marketing_trial_leads IS 'Pre-registration free trial leads from marketing website — isolated from enrolled b2c_customers';

-- Indexes
CREATE INDEX idx_b2c_marketing_trial_leads_email ON gold.b2c_marketing_trial_leads USING btree (email);
CREATE INDEX idx_b2c_marketing_trial_leads_status ON gold.b2c_marketing_trial_leads USING btree (status);
CREATE INDEX idx_b2c_marketing_trial_leads_created ON gold.b2c_marketing_trial_leads USING btree (created_at);

-- Auto-update updated_at (reuses existing gold function)
CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON gold.b2c_marketing_trial_leads
    FOR EACH ROW
    EXECUTE FUNCTION gold.update_updated_at_column();

-- Grants (matching existing B2C table pattern)
GRANT SELECT, INSERT, UPDATE, DELETE ON gold.b2c_marketing_trial_leads TO "anon";
GRANT SELECT, INSERT, UPDATE, DELETE ON gold.b2c_marketing_trial_leads TO "authenticated";
GRANT ALL ON gold.b2c_marketing_trial_leads TO "service_role";
