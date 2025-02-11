import type { NextApiRequest, NextApiResponse } from "next"
import Airtable from "airtable"

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID as string)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { schoolName, name, role, email, phone, typeOfSchool } = req.body

    await base("Contact Form Submissions").create([
      {
        fields: {
          "School Name": schoolName,
          "Contact Name": name,
          Role: role,
          Email: email,
          Phone: phone,
          "Type of School": typeOfSchool,
          "Submission Date": new Date().toISOString(),
        },
      },
    ])

    res.status(200).json({ message: "Form submitted successfully" })
  } catch (error) {
    console.error("Error submitting form:", error)
    res.status(500).json({ message: "Error submitting form" })
  }
}

