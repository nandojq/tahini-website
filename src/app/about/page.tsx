import type { Metadata } from "next";
import Image from "next/image";
import { members } from "@/lib/data/members";
import type { Member } from "@/types";

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="flex flex-col gap-4 border border-accent-warm rounded-lg p-5 hover:border-accent-terra transition-colors">
      <div className="aspect-square rounded-lg bg-accent-warm/50 overflow-hidden relative">
        <Image
          src={member.photoSrc}
          alt={member.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div>
        <p className="font-heading text-lg font-semibold">{member.name}</p>
        {member.instrument && (
          <p className="text-sm text-accent-terra mb-2">{member.instrument}</p>
        )}
        {member.bio && (
          <p className="text-sm text-foreground/60 leading-relaxed">{member.bio}</p>
        )}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "Meet the members of Tahini Tuesday.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Band bio */}
      <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
          <Image
            src="/images/about/band.webp"
            alt="Tahini Tuesday"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-5xl font-semibold leading-tight">
            The groove from Brussels
          </h1>
          <p className="text-foreground/70 leading-relaxed">
            Tahini Tuesday makes music for slow mornings, golden evenings, and
            everything in between. Based in Brussels, they blend indie-funk with
            jazzy textures and retro soul — like a warm breeze with a groove. Think
            somewhere between Men I Trust, Matt Duncan, and a backyard jam session
            that got a little too funky.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            What started in home studios with Fernando Jorge and Analena Vater has
            grown into a full five-piece band, now playing shows across Belgium and
            Germany. Their debut <em>Golden Hour Reflections</em> was crowdfunded
            and pressed to vinyl in 2023.
          </p>
          <p className="text-foreground/70 leading-relaxed">
            Their latest release, <em>Sundaze</em> — a five-track EP — is mellow,
            funky, and perfect for slaying in the kitchen or long drives to your
            favourite summer destination. With Sundaze out, Tahini Tuesday is
            setting sights on bringing their groove to more stages, from intimate
            venues to summer festivals across Belgium and neighbouring countries.
          </p>
        </div>
      </section>

      {/* Member cards — 3 top + 2 centered bottom */}
      <section>
        <h2 className="font-heading text-3xl font-semibold mb-8">The Band</h2>
        <div className="flex flex-col gap-6">
          {/* Row 1: first 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {members.slice(0, 3).map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
          {/* Row 2: last 2 centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:w-2/3 mx-auto w-full">
            {members.slice(3).map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
