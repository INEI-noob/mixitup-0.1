import { NextResponse } from 'next/server';
import { supabase } from '../../../../lib/supabase'; // Import Supabase client

export async function GET(req: Request, { params }: { params: { email: string } }) {
  const { email } = params; // Get email from URL parameter

  try {
    // Query Supabase to get user data based on email
    const { data, error } = await supabase
      .from('users') // Replace 'users' with the correct table name in Supabase
      .select('name, profilePicture, bio, twitter, instagram, linkedIn') // Select necessary fields
      .eq('email', email) // Match the email
      .single(); // Assume there's only one user with this email

    if (error) {
      console.error('Error fetching user data:', error);
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return the user data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Error fetching user data' }, { status: 500 });
  }
}
