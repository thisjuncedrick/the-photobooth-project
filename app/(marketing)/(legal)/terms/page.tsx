import { Metadata } from "next";

import { LegalPageTemplate } from "@/components/templates/legal";
import { TermsSections } from "@/config/terms";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title='Terms of Use'
      aside={
        <>
          <h2 className='text-primary font-bold uppercase'>Section Guide</h2>

          <ol className='list-inside list-decimal'>
            {TermsSections.map(({ title, anchor }) => (
              <li
                key={anchor}
                className='text-muted-foreground hover:text-foreground w-fit'
              >
                <a href={`#${anchor}`}>{title}</a>
              </li>
            ))}
          </ol>
        </>
      }
    >
      {TermsSections.map(({ title, anchor, content }) => (
        <section key={anchor} id={anchor} className='py-6 [counter-increment:section]'>
          <h3 className='text-primary mb-3 text-lg font-bold before:mr-2 before:tabular-nums before:content-[counter(section)"."] sm:text-2xl'>
            {title}
          </h3>
          <p className='[&_.font-bold]:text-primary [&_.italic]:text-primary [&_a]:text-primary [&_a]:underline'>
            {content}
          </p>
        </section>
      ))}
    </LegalPageTemplate>
  );
}
