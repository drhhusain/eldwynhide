import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = contactFormSchema.parse(body)

    // Here you would typically:
    // 1. Send an email using a service like Resend
    // 2. Store the inquiry in a database
    // 3. Send a confirmation email to the user

    // For now, we'll just log and return success
    console.log('Contact form submission:', validatedData)

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { success: true, message: 'Your message has been sent successfully.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { success: false, message: 'Invalid form data', errors: error },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

