import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mqhujrncetqgtaamdkyq.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xaHVqcm5jZXRxZ3RhYW1ka3lxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwMjQ1MTYsImV4cCI6MjAxMzYwMDUxNn0.3L0F-52YNuxMoM30YeOcw1g4AtMeuNCsQ-K_BH9CO3Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
