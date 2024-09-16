'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
      title: "Beginner Piano Lessons",
      description:
        "A comprehensive program designed for students just starting their musical journey, focusing on fundamental piano skills and basic music theory.",
      link: "/",
    },
    {
      title: "Guitar Mastery",
      description:
        "An advanced course for guitarists aiming to enhance their technique, learn complex chords, and master various styles like jazz, rock, and classical.",
      link: "/",
    },
    {
      title: "Vocal Training",
      description:
        "Personalized voice coaching for singers, focusing on breathing techniques, vocal range improvement, and performance skills.",
      link: "/",
    },
    {
      title: "Drum Fundamentals",
      description:
        "An interactive course covering the basics of drumming, including rhythm patterns, techniques, and how to play along with different music genres.",
      link: "/",
    },
    {
      title: "Music Production",
      description:
        "A hands-on program teaching students the art of music production, from sound design and recording to mixing and mastering tracks.",
      link: "/",
    },
    {
      title: "Songwriting Workshop",
      description:
        "A creative course for aspiring songwriters, focusing on lyrical writing, melody composition, and structuring songs across various genres.",
      link: "/",
    },
  ];  

const UpcomingWebinars = () => {
  return (
    <div className='p-12 bg-gray-900'>
      <div className='w-full px-4 sm:px-6'>
        <div className="text-center">
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>
        <div className='mt-10'>
            <CardHoverEffect />
        </div>
        <div className='mt-10 text-center'>
        <Link href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Webinars
        </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars
