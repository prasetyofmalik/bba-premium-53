
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tjzxzaabqxutwdknscwh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqenh6YWFicXh1dHdka25zY3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwOTQ3MTUsImV4cCI6MjA1NzY3MDcxNX0.sPTFXnaUN0i7e0SlP6NXbuGxgzFz0nby85ExjcNSkYY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
