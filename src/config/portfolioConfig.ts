import { ImageMetadata } from "../types/museum";

// Extended type for portfolio items with additional content
export interface PortfolioItem extends ImageMetadata {
  category: "POSITION" | "MAKING" | "READING" | "SYNTHESIS";
  subtitle?: string;
  panelContent: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export const portfolioItems: PortfolioItem[] = [
  {
    url: "./position-statement.svg",
    title: "My Position on AI as Creative Partner",
    artist: "Coco Wu",
    date: "Fall 2025",
    description: "A thesis on AI collaboration",
    link: "",
    category: "POSITION",
    subtitle: "Thesis Statement",
    panelContent: `After six weeks of building with AI, I'm not an optimist or a skeptic. It's more complicated than that. **AI is a powerful creative amplifier, but it demands human intentionality to produce meaningful work rather than just efficient output.**

AI dramatically lowers the barrier between imagination and execution. Ideas that once required years of technical training can now be prototyped in hours. But this acceleration comes with a subtle danger—the temptation to mistake speed for depth, completion for quality, and efficiency for creativity itself.

My authentic stance is this: **AI works best as a creative partner when I show up with clarity about what matters to me**. When I'm vague or passive, AI produces generic work. When I'm specific about my values, context, and purpose, AI becomes almost magical in its ability to help me realize something I couldn't have built alone.

That's not how I thought about AI before this course. I came in thinking AI was either a threat to creativity or a tool to be mastered. I'm leaving with the understanding that it's more like a mirror—it reflects back the quality of my own thinking, amplified.`,
  },
  {
    url: "./calendar-full.png",
    title: "Smart Calendar with Protected Personal Time",
    artist: "Coco Wu",
    date: "Week 2",
    description: "Learning to collaborate with AI",
    link: "https://web-production-b0a0.up.railway.app",
    category: "MAKING",
    subtitle: "Week 2 | Learning to Collaborate",
    panelContent: `This project taught me the most about what makes AI collaboration work—and fail.

I started with an incomplete picture of what I wanted. From my journal: *"The project started with incomplete instructions... there was one point where I realized that when I looked at this web coding project in VS Code, there were a lot of iterative documents like MD files. I feel like the whole project could have been more impactful and efficient if I had had the whole design or layout in the beginning."*

The breakthrough came when I shifted my approach. Rather than asking AI to "make a calendar app," I framed it as: "a smart calendar with protected personal time for a graduate student transitioning from China to Harvard, who struggles to maintain self-care boundaries." Suddenly the AI understood not just *what* to build but *why* it mattered.

**AI doesn't replace the hard work of knowing what you want. It accelerates the execution once you've done that thinking.** The calendar project only became meaningful when I invested in articulating my own struggle with time management and boundary-setting. AI couldn't generate that self-knowledge—but once I provided it, AI could help me build a tool that addressed my actual life.

What I love about what I made wasn't the technical achievement. It was seeing my own patterns reflected back in a functional system. The AI helped me externalize an internal struggle into something I could interact with and improve upon.

---

**Try it out**: Want to test the app or combine your own calendars? Click the "Live Demo" button below. When you click "Login", your browser may show a security warning—simply click **"Advanced"** and then **"Proceed"** to access the application.`,
    links: {
      demo: "https://web-production-b0a0.up.railway.app",
      github: "https://github.com/cocowutech/T564A_SmartCalendar",
    },
  },
  {
    url: "./finance-dashboard.png",
    title: "Financial Journey Visualization",
    artist: "Coco Wu",
    date: "Week 4",
    description: "AI as thinking partner",
    link: "https://cocowutech.github.io/T564A_FinanciallyOverview/spending_visualizations.html",
    category: "MAKING",
    subtitle: "Week 4 | AI as Thinking Partner",
    panelContent: `This project surprised me because it revealed how AI can help with self-understanding, not just product-building.

I fed my spending data from the Shark Accounting app—348 transactions across my transition from China to Harvard—and asked AI to help me understand patterns. The resulting visualizations showed me things I hadn't consciously recognized: my food spending dropped 47% after moving (I'd shifted to cooking at home), transportation costs essentially disappeared (I'd bought an e-bike), and I had $5,880 in pre-Harvard learning subscriptions I'd forgotten to cancel.

What struck me was how AI helped me see my own life with new clarity. The data was always mine, but I needed computational help to surface the patterns. AI didn't judge my $50K tuition payment or question my choices—it just organized information in ways that let me draw my own conclusions.

**AI can serve as a thinking partner, not just a doing partner.** By handling the computational complexity of pattern-finding, it freed me to focus on the interpretive, meaning-making work that only I could do. The insight that my spending now "77.5% directly supports education/housing mission" wasn't AI's conclusion—it was mine, enabled by AI's analysis.`,
    links: {
      demo: "https://cocowutech.github.io/T564A_FinanciallyOverview/spending_visualizations.html",
      github: "https://github.com/cocowutech/T564A_FinanciallyOverview",
    },
  },
  {
    url: "./pixelrelay.png",
    title: "Pixel Relay: Connect & Compose",
    artist: "Coco Wu",
    date: "Week 5",
    description: "Where AI couldn't replace me",
    link: "https://pixel-relay-game.web.app/",
    category: "MAKING",
    subtitle: "Week 5 | Where AI Couldn't Replace Me",
    panelContent: `This project showed me what AI can and can't do.

The game—where students spell words by clicking through letters while a pixel runner sprints forward—was born from my teaching practice with Vico Education. I wanted to make vocabulary practice feel like a team sport rather than solitary drilling. AI helped me translate that vision into working code far faster than I could have alone.

But the most instructive moment came from failure. I initially designed a drag-and-drop mechanic that felt intuitive to me as the developer. Users found it confusing. The connection lines I'd added obscured the letters they needed to see. *"Dragging was MUCH more confusing than expected... Simple click-to-select was far better."*

AI couldn't predict this. It optimized for what I asked for, not for what users actually needed. The insight came from watching people struggle—something only I could observe by being present with the learners I was designing for.

**AI excels at execution within defined constraints but struggles with the messy, contextual knowledge that comes from being embedded in a community.** My understanding of Chinese students learning English—their frustrations, their pride when they succeed, the social dynamics of a classroom—this contextual intelligence isn't something I can fully articulate in a prompt. It lives in my experience.

Working with AI felt *"like pair-programming with someone who never gets tired of brainstorming."* But the human contributions—understanding classroom realities, prioritizing which friction points matter most—remained irreplaceable.`,
    links: {
      demo: "https://pixel-relay-game.web.app/",
      github: "https://github.com/cocowutech/T564A_PixelGame",
    },
  },
  {
    url: "./crawford-quote.svg",
    title: "Kate Crawford: AI as Power",
    artist: "Atlas of AI (2021)",
    date: "Reading 1",
    description: "How AI shapes what we believe is possible",
    link: "",
    category: "READING",
    subtitle: "Atlas of AI (2021) | Reading 1",
    panelContent: `Crawford writes about AI reshaping "what we are and what we can be." That hit different after building three projects. She writes that AI is now a player in "the shaping of knowledge, communication, and power" at levels ranging from epistemology to identity formation.

> "Simply put, artificial intelligence is now a player in the shaping of knowledge, communication, and power... what we are and what we can be." (Crawford, 2021, p. 20)

At first I read this as a warning. But after building things, I see it differently. Yes, AI shapes what kinds of knowledge get produced and how. When I built the Smart Calendar, I was encoding assumptions about what "productivity" means, what counts as "protected time," what kinds of lives are worth optimizing for. These are not neutral technical decisions—they're worldview choices embedded in systems.

But Crawford's framework also helped me understand why my most successful projects were ones where I brought explicit values to the collaboration. The AI didn't impose a worldview on me; it amplified whatever worldview I brought to it. When I was unclear about my values, the outputs felt generic. When I was explicit—"I want to protect self-care time because I believe rest is not optional"—the AI helped me build something aligned with that belief.

Crawford calls design "a site of political responsibility, where every system embeds a worldview." My experience confirms this. But it also suggests that **conscious creators can use AI to embed worldviews of their choosing**, rather than defaulting to whatever the technology produces.`,
  },
  {
    url: "./wiener-quote.svg",
    title: "Norbert Wiener: The Double Edge",
    artist: "The Human Use of Human Beings (1950)",
    date: "Reading 2",
    description: "The sword cuts both ways",
    link: "",
    category: "READING",
    subtitle: "The Human Use of Human Beings (1950) | Reading 2",
    panelContent: `Wiener wrote this in 1950, but it feels like he saw exactly what's happening now. He wrote about the "freedom to exploit"—the tendency to use technology for extraction rather than flourishing.

> "The new industrial revolution is a two-edged sword. It may be used for the benefit of humanity... If, however, we proceed along the clear and obvious lines of our traditional behavior, and follow our traditional worship of progress and the fifth freedom—the freedom to exploit—it is practically certain that we shall have to face a decade or more of ruin and despair." (Wiener, 1950, p. 189)

This made me question my own motivations. Am I using AI to genuinely reclaim agency over my time and creative practice? Or am I becoming a more efficient self-exploiter, optimizing myself for productivity in ways that serve systems rather than my own wellbeing?

I found myself returning to this question throughout the course. When I built the homework automation system, was I freeing myself for more meaningful work—or just training myself to produce more output? When I optimized my calendar, was I protecting my humanity—or turning myself into a more efficient machine?

I don't have a clean answer. But Wiener's framework gave me a useful question to carry forward: **Am I using this technology to serve human values, or am I using it in ways that treat myself as a resource to be optimized?**

I think the difference is intentionality. AI can support either extraction or flourishing. The determining factor is whether the human brings conscious values to the collaboration—or simply accepts whatever efficiency gains the technology offers.`,
  },
  {
    url: "./dreyfus-quote.svg",
    title: "Hubert Dreyfus: The Human Contribution",
    artist: "What Computers Can't Do (1972)",
    date: "Reading 3",
    description: "Framing is the human creative act",
    link: "",
    category: "READING",
    subtitle: "What Computers Can't Do (1972) | Reading 3",
    panelContent: `Dreyfus gave me the language I was missing. He says choosing how to represent a problem is itself a "creative act."

> "The choice of problem representation is the job of the human programmer and is a creative act." (Dreyfus, 1972, p. 210)

He writes that the representation "defines the problem space" and "is the problem solver's 'way of looking at' the problem." The efficiency of any AI solution depends enormously on this upstream human choice—a choice that is non-algorithmic, contextual, and creative.

That's exactly what I experienced. The Smart Calendar project only became meaningful when I reframed the problem from "schedule management" to "protecting self-care during a major life transition." The Pixel Relay game only clicked when I represented vocabulary practice not as individual drilling but as team-based accomplishment. The finance visualization only revealed useful insights when I segmented the data around the Harvard transition—a conceptual cut that I made, not the AI.

Reading Dreyfus, it clicked: **the human contribution isn't prompting—it's framing**. The creative act happens before the AI does anything. We decide what the problem is, what aspects matter, what representation will make the problem tractable. AI then works within that frame, often brilliantly, but it didn't generate the frame.

This changed how I think about AI and creativity. AI can execute within representations, combine elements in novel ways, and suggest variations. But the choice of representation—the "way of looking at"—remains stubbornly human. That's where creativity lives.`,
  },
  {
    url: "./synthesis-diagram.svg",
    title: "The Synthesis",
    artist: "Coco Wu",
    date: "Fall 2025",
    description: "Where making meets meaning",
    link: "",
    category: "SYNTHESIS",
    subtitle: "Where Making Meets Meaning",
    panelContent: `Here's where I landed: **AI amplifies whatever you bring to it.** Bring clarity, get magic. Bring vagueness, get generic output.

What I actually believe now:

**AI amplifies the quality of human input.** When I was vague, AI produced generic output. When I was clear about context, purpose, and values, AI helped me build things I couldn't have built alone. This is different from replacement—it's augmentation that depends on what the human brings.

**Contextual and embodied knowledge remains irreplaceable.** My understanding of Chinese students learning English, my experience of transitioning from China to Harvard, my felt sense of what makes a classroom dynamic work—these forms of knowledge can't be fully transferred to an AI through prompting. The most successful collaborations were ones where I contributed this contextual intelligence and AI handled the computational execution.

**Values must be brought, not generated.** AI doesn't know what matters. It doesn't know that protecting self-care time reflects a belief about human flourishing, or that making vocabulary practice social reflects a pedagogical philosophy about learning. These are human contributions that shape what gets built and why.

I'm optimistic about AI's potential to democratize creation and lower barriers between imagination and execution. I'm cautious about the temptation to mistake efficiency for meaning, or to let AI's suggestions substitute for our own thinking about what we actually want.

**AI collaboration works best when I show up with clarity about who I am and what I care about.** The coin under the pillow story that opened my design journal captures this: meaningful teaching comes from recognizing small moments of growth, from being present with learners, from understanding what a child's pride looks like. AI couldn't have known to give that student a badge coin. That insight came from my own experience, attention, and care.

But AI can help me tell that story, build systems that honor those values, and create tools that extend my capacity to serve students. That's the partnership I've come to believe in: **human intentionality, amplified by AI capability, in service of values we choose and lives we're present for**.

---

**References**:
Crawford, K. (2021). *Atlas of AI*. Yale University Press.
Dreyfus, H. L. (1972). *What computers can't do*. Harper & Row.
Wiener, N. (1950). *The human use of human beings*. Houghton Mifflin.`,
  },
];
