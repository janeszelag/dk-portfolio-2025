import { VimeoIcon, LinkedInIcon } from "@/components/Icons"

export function Contact() {
  return (
    <section id="contact" className="bg-white h-screen snap-start">
      <div className="flex flex-col items-center justify-center h-full gap-2">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <a href="mailto:dkneault@gmail.com" className="hover:underline hover:text-pink-300" alt="Email Dakota Arseneault">
          <p>dkneault@gmail.com</p>
        </a>
        <a href="tel:12892427878" alt="Call Dakota Arseneault" className="hover:underline hover:text-pink-300">
          <p>(289) 242 7878</p>
        </a>
        <div className="flex gap-3">
          <a href="https://vimeo.com/dakotaarseneault" target="_blank" rel="noopener noreferrer" alt="Vimeo Profile of Dakota Arseneault">
            <VimeoIcon />
          </a>
          <a href="https://www.linkedin.com/in/dakota-arseneault/" target="_blank" rel="noopener noreferrer" alt="LinkedIn Profile of Dakota Arseneault">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </section>
  )
}