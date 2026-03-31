-- =================================================================================
-- Nutri Apps Schema Update
-- Adding User Geographic Tracking and Upgrading Timestamp Standards
-- =================================================================================

-- 1. Upgrade Timestamp columns to 'timestamp with time zone' (UTC standard)
ALTER TABLE gold.b2c_marketing_trial_leads 
ALTER COLUMN last_resend_at SET DATA TYPE timestamp with time zone USING last_resend_at AT TIME ZONE 'UTC';

-- Note: Depending on existing schema elements, created_at and updated_at might exist.
-- Assuming standard Supabase defaults, we optionally enforce UTC if they exist:
ALTER TABLE gold.b2c_marketing_trial_leads 
ALTER COLUMN created_at SET DATA TYPE timestamp with time zone USING created_at AT TIME ZONE 'UTC',
ALTER COLUMN updated_at SET DATA TYPE timestamp with time zone USING updated_at AT TIME ZONE 'UTC';

-- 2. Add Geographic Timezone Column for targeted marketing campaigns
ALTER TABLE gold.b2c_marketing_trial_leads 
ADD COLUMN user_timezone character varying(50);

-- Provide a comment descriptor for system architects
COMMENT ON COLUMN gold.b2c_marketing_trial_leads.user_timezone IS 'IANA Timezone string derived from Intl.DateTimeFormat (e.g., America/New_York) for localized marketing drips.';
