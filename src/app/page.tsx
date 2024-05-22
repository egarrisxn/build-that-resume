import Link from "next/link";

const linkAttr = 'underline underline-offset-2 text-blue-600 hover:text-blue-300'

export default function ResumePage() {
  return (
    <div className="text-center 2xl:text-xl pt-24">
      <span className="font-bold">Build That Resume!</span>
      <br/><br/>
      Click <Link href="/resume" className={`${linkAttr}`}>here</Link> for an example.
      <br/>
      Click <Link href='/form' className={`${linkAttr}`}>here</Link> for the template.
      <br/>
      Click <a href='https://www.youtube.com/watch?v=o-YBDTqX_ZU' target="_blank" rel="noopener noreferrer" className={`${linkAttr}`}>here</a> for a fun video.
    </div>
  );
}
