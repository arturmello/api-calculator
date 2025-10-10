import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nkfyljqudgdrlvfovcdu.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rZnlsanF1ZGdkcmx2Zm92Y2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwODYyMjAsImV4cCI6MjA3NTY2MjIyMH0.sHNMXuPgB41kS1jj2G0hANfFw0oZTZUsmLrBo49jH-s"

export const supabase = createClient(supabaseUrl, supabaseKey);