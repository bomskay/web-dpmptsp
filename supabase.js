// lib/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kkqillmuqjylntzzwjbu.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrcWlsbG11cWp5bG50enp3amJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MDMxODQsImV4cCI6MjA2MzA3OTE4NH0.THErp1-CKvRNuJytEK6HZNe_XkZbd80fLFoSKSrR8wk";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
