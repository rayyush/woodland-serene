import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sbnvzbnjfohdvqxyqxke.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNibnZ6Ym5qZm9oZHZxeHlxeGtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczOTgwNTUsImV4cCI6MjAyMjk3NDA1NX0.D7kR2jIR8MTNYoYUYC-1LPul1CPVrkQHlpFSEMavMv8";
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabaseUrl, supabaseKey };
export default supabase;
