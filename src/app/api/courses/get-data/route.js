import { handleCourseFetch } from '../../../../controllers/courseCOntroller';
import connectDB from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    if (!process.env.MONGO_URI) {
      console.error('MONGO_URI is not defined in environment variables');
      return NextResponse.json({ 
        message: "Using default courses",
        courses: [
          { COURSE_ID_PK: 1, COURSE_NAME: "Basic Quran Reading" },
          { COURSE_ID_PK: 2, COURSE_NAME: "Tajweed Course" },
          { COURSE_ID_PK: 3, COURSE_NAME: "Hifz Program" }
        ]
      });
    }

    await connectDB();
    return handleCourseFetch(req);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        message: "Internal server error",
        error: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred'
      },
      { status: 500 }
    );
  }
}
