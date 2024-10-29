import { sql } from "@vercel/postgres";
import {
  About,
  Contact,
  Education,
  Link,
  Resume,
  WorkExperience,
} from "./definitions";

export async function fetchAbout(): Promise<About[]> {
    try {
        const data = await sql<About>`SELECT * from about`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch About data.');
    }
}

export async function fetchLinks(): Promise<Link[]> {
    try {
        const data = await sql<Link>`SELECT * from links`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Links data.');
    } 
}

export async function fetchContacts(): Promise<Contact[]> {
    try {
        const data = await sql<Contact>`SELECT * from contacts`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Contacts data.');
    } 
}

export async function fetchWorkExperience(): Promise<WorkExperience[]> {
    try {
        const data = await sql<WorkExperience>`SELECT * from work_experience`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch WorkExperience data.');
    } 
}

export async function fetchEducation(): Promise<Education[]> {
    try {
        const data = await sql<Education>`SELECT * from education`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Education data.');
    } 
}

export async function fetchResume(): Promise<Resume[]> {
    try {
        const data = await sql<Resume>`SELECT * from resume`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch Resume data.');
    } 
}
