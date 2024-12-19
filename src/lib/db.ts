// src/lib/db.ts

import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project credentials
const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Function to find a user by email
export const findUserByEmail = async (email: string) => {
  const { data, error } = await supabase
    .from('users') // Assuming you have a 'users' table
    .select('*')
    .eq('email', email)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
