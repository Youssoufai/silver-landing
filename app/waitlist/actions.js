'use server';

import { getDB } from "../lib/mongo";

export async function saveWaitlistEntry(formData) {
    const { firstName, lastName, email, phone } = formData;

    if (!firstName || !lastName || !email || !phone) {
        throw new Error('Missing required fields');
    }

    const db = await getDB();
    const waitlist = db.collection('waitlist');

    await waitlist.insertOne({
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date(),
    });
}
