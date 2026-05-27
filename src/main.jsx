import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Award,
  Baby,
  BookOpen,
  Building2,
  Bus,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  FileText,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Image,
  Laptop,
  Library,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Microscope,
  Music2,
  Phone,
  Play,
  Send,
  Share2,
  ShieldCheck,
  Star,
  Trophy,
  Users,
  Video,
  X,
} from 'lucide-react';
import './styles.css';

const fallbackHero = '/assets/srk-hero-campus.png';
const schoolImages = [
  '/assets/justdial/school-1.jpg',
  '/assets/justdial/school-2.jpg',
  '/assets/justdial/school-3.jpg',
  '/assets/justdial/school-4.jpg',
  fallbackHero,
];
const heroImage = schoolImages[0];
const tourVideo = '/assets/srk-campus-tour.webm';
const logoImage = '/assets/srk-school-logo.png';

const school = {
  name: 'Sarvepalli Radhakrishnan English Medium School',
  shortName: 'SRK English Medium School',
  location: 'Reddivaripalem, Tadipatri',
  phone: '+91 90594 61389',
  phoneHref: 'tel:+919059461389',
  email: 'Contact via Justdial listing',
  emailHref:
    'https://www.justdial.com/Tadipatri/Sarvepalli-Radhakrishnan-English-Medium-School-Reddivaripalem/9999P8558-8558-180101075303-K5D2_BZDET',
  address: 'Sunkulammapalem, Reddivaripalem, Tadipatri-515411, Andhra Pradesh',
  principal: 'School Management',
  principalRole: 'Sarvepalli Radhakrishnan English Medium School',
  principalNote:
    'The school is presented as an English medium, co-educational institution serving families in Reddivaripalem and Tadipatri. Its focus is on structured learning, attentive support, and a nurturing campus environment where students can build confidence, discipline, and academic readiness.',
  rating: '4.6',
  ratingsCount: '5 Ratings',
  medium: 'English',
  type: 'Co-ed',
  hours: 'Monday to Saturday, 9:00 AM - 4:30 PM',
  sourceUrl:
    'https://www.justdial.com/Tadipatri/Sarvepalli-Radhakrishnan-English-Medium-School-Reddivaripalem/9999P8558-8558-180101075303-K5D2_BZDET',
};

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Life @ SRK', path: '/life' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'News & Events', path: '/news' },
  { label: 'Contact Us', path: '/contact' },
];

const stats = [
  { icon: Award, value: '4.6', label: 'Public Rating', color: 'text-leaf bg-emerald-50' },
  { icon: Users, value: '5', label: 'Public Ratings', color: 'text-gold bg-amber-50' },
  { icon: BookOpen, value: 'English', label: 'Medium', color: 'text-blue-600 bg-blue-50' },
  { icon: Building2, value: '16', label: 'Public Photos', color: 'text-purple-600 bg-purple-50' },
  { icon: ShieldCheck, value: 'Co-ed', label: 'Student Type', color: 'text-rose-600 bg-rose-50' },
];

const reasons = [
  { icon: HeartHandshake, title: 'Holistic Development', text: 'Balanced attention to academics, activities, values, health, and confidence.' },
  { icon: BookOpen, title: 'Academic Excellence', text: 'Structured teaching, concept checks, revision plans, and board-focused mentoring.' },
  { icon: ShieldCheck, title: 'Safe & Caring Campus', text: 'Supervised movement, visitor control, CCTV coverage, and student support routines.' },
  { icon: Laptop, title: 'Modern Infrastructure', text: 'Smart classrooms, labs, library, sports areas, and technology-enabled learning.' },
  { icon: Users, title: 'Experienced Faculty', text: 'Patient, trained teachers who guide students with discipline and care.' },
  { icon: CheckCircle2, title: 'Values & Discipline', text: 'Daily habits that build respect, responsibility, communication, and self-belief.' },
];

const programs = [
  {
    slug: 'pre-primary',
    icon: Baby,
    title: 'Pre-Primary',
    range: 'Nursery to UKG',
    text: 'Playful foundations for confident first steps.',
    details: ['Activity-based learning', 'Phonics and language readiness', 'Number sense and patterns', 'Motor skills, stories, music, and play'],
  },
  {
    slug: 'primary-school',
    icon: BookOpen,
    title: 'Primary School',
    range: 'Class I to V',
    text: 'Strong basics with curiosity-led learning.',
    details: ['English, Hindi, Mathematics, EVS, Computer basics', 'Reading habit and handwriting development', 'Projects, quizzes, and assemblies', 'Regular parent updates'],
  },
  {
    slug: 'middle-school',
    icon: Microscope,
    title: 'Middle School',
    range: 'Class VI to VIII',
    text: 'Inquiry, projects, and skill discovery.',
    details: ['Science and social science exploration', 'Coding, clubs, debates, and practical work', 'Foundation assessments', 'Study skills and peer learning'],
  },
  {
    slug: 'senior-school',
    icon: GraduationCap,
    title: 'Senior School',
    range: 'Class IX to XII',
    text: 'Focused preparation for board success.',
    details: ['Board exam planning', 'Subject mentoring and doubt support', 'Practical labs and career guidance', 'Discipline, revision, and performance tracking'],
  },
];

const facilities = [
  { slug: 'smart-classrooms', icon: Laptop, title: 'Smart Classrooms', text: 'Interactive teaching tools, clear visuals, and comfortable learning spaces.' },
  { slug: 'science-labs', icon: FlaskConical, title: 'Science Laboratories', text: 'Practical learning for physics, chemistry, biology, and general science.' },
  { slug: 'computer-lab', icon: Building2, title: 'Computer Lab', text: 'Digital literacy, coding basics, projects, and supervised technology use.' },
  { slug: 'library', icon: Library, title: 'Library & Reading Room', text: 'A calm reading environment with fiction, reference, and exam resources.' },
  { slug: 'sports', icon: Trophy, title: 'Sports Complex', text: 'Fitness routines, athletics, team games, and inter-house tournaments.' },
  { slug: 'arts-music', icon: Music2, title: 'Arts & Music Studio', text: 'Creative spaces for music, art, craft, dance, and performance.' },
  { slug: 'transport', icon: Bus, title: 'Transport Facility', text: 'Planned bus routes with monitored pickup and drop routines.' },
  { slug: 'security', icon: Camera, title: 'CCTV Secured Campus', text: 'Controlled access, CCTV monitoring, and safe student movement.' },
];

const news = [
  { slug: 'annual-sports-meet-2026', title: 'Annual Sports Meet 2026', date: '18 June 2026', text: 'Athletics, team spirit, and house competitions across junior and senior groups.' },
  { slug: 'science-innovation-fair', title: 'Science & Innovation Fair', date: '25 June 2026', text: 'Young innovators present models, experiments, and creative problem-solving ideas.' },
  { slug: 'reading-week', title: 'Reading Week Celebration', date: '2 July 2026', text: 'Storytelling, book reviews, library visits, author sessions, and reading challenges.' },
];

const events = [
  { day: '08', month: 'JUN', title: 'Parent Orientation Program', date: '8 June 2026' },
  { day: '17', month: 'JUN', title: 'Inter-House Football Tournament', date: '17 June 2026' },
  { day: '05', month: 'JUL', title: 'Environment Day Activities', date: '5 July 2026' },
];

const quickPages = [
  { path: '/fee-structure', title: 'Fee Structure', icon: FileText, text: 'Class-wise fee information, payment schedule, transport charges, and office support.' },
  { path: '/academic-calendar', title: 'Academic Calendar', icon: CalendarDays, text: 'Important school dates, exams, holidays, activities, and parent meetings.' },
  { path: '/transport', title: 'Transport', icon: Bus, text: 'Bus route support, pickup points, safety routines, and transport enquiry.' },
  { path: '/downloads', title: 'Downloads', icon: Download, text: 'Admission form, prospectus, circulars, calendar, and useful school documents.' },
  { path: '/gallery', title: 'Gallery', icon: Image, text: 'Campus, classroom, lab, sports, activity, and celebration highlights.' },
];

const trustMarkers = [
  'English medium instruction',
  'Co-educational environment',
  'Reddivaripalem campus',
  '9:00 AM - 4:30 PM hours',
];

const institutionStandards = [
  { icon: BookOpen, title: 'Academic Governance', text: 'Planned curriculum delivery, periodic reviews, remedial support, and measurable student progress.' },
  { icon: ShieldCheck, title: 'Campus Safety', text: 'Clear supervision routines, controlled entry, CCTV coverage, and responsible student movement.' },
  { icon: Users, title: 'Parent Partnership', text: 'Regular updates, counselling support, orientation meetings, and a responsive school office.' },
];

const admissionJourney = [
  { title: 'Enquiry', text: 'Share class and parent details.' },
  { title: 'Counselling', text: 'Understand curriculum, fees, and transport.' },
  { title: 'Campus Visit', text: 'Meet the office team and see facilities.' },
  { title: 'Confirmation', text: 'Complete documents and admission formalities.' },
];

function normalizePath(path) {
  if (!path || path === '') return '/';
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;
}

function navigate(path) {
  const clean = normalizePath(path);
  if (window.location.pathname !== clean) {
    window.history.pushState({}, '', clean);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

function useRoute() {
  const getRoute = () => normalizePath(window.location.pathname);
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onPopState = () => {
      setRoute(getRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return route;
}

function Link({ to, className, children, ...props }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
        event.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}

function App() {
  const route = useRoute();
  const page = useMemo(() => resolvePage(route), [route]);

  return (
    <div className="min-h-screen bg-mist text-ink">
      <TopBar />
      <Header activePath={page.activePath} />
      <MobileQuickActions />
      <main>{page.node}</main>
      <BackToTop />
      <Footer />
    </div>
  );
}

function resolvePage(route) {
  const program = programs.find((item) => route === `/academics/${item.slug}`);
  const facility = facilities.find((item) => route === `/facilities/${item.slug}`);
  const article = news.find((item) => route === `/news/${item.slug}`);
  const quickPage = quickPages.find((item) => item.path === route);

  if (program) return { activePath: '/academics', node: <ProgramPage program={program} /> };
  if (facility) return { activePath: '/facilities', node: <FacilityPage facility={facility} /> };
  if (article) return { activePath: '/news', node: <ArticlePage article={article} /> };
  if (quickPage && route !== '/gallery') return { activePath: quickPage.path === '/transport' ? '/facilities' : '/admissions', node: <QuickInfoPage page={quickPage} /> };

  const pages = {
    '/': { activePath: '/', node: <HomePage /> },
    '/about': { activePath: '/about', node: <AboutPage /> },
    '/academics': { activePath: '/academics', node: <AcademicsPage /> },
    '/admissions': { activePath: '/admissions', node: <AdmissionsPage /> },
    '/life': { activePath: '/life', node: <LifePage /> },
    '/facilities': { activePath: '/facilities', node: <FacilitiesPage /> },
    '/news': { activePath: '/news', node: <NewsPage /> },
    '/contact': { activePath: '/contact', node: <ContactPage /> },
    '/enquiry': { activePath: '/contact', node: <EnquiryPage mode="Enquiry" /> },
    '/apply': { activePath: '/admissions', node: <EnquiryPage mode="Admission Application" /> },
    '/virtual-tour': { activePath: '/life', node: <VirtualTourPage /> },
    '/gallery': { activePath: '/life', node: <GalleryPage /> },
    '/privacy': { activePath: '/contact', node: <PolicyPage title="Privacy Policy" /> },
    '/terms': { activePath: '/contact', node: <PolicyPage title="Terms & Conditions" /> },
    '/thank-you': { activePath: '/contact', node: <ThankYouPage /> },
  };

  return pages[route] || { activePath: '/', node: <NotFoundPage /> };
}

function TopBar() {
  return (
    <div className="topbar bg-ink text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs font-semibold sm:px-6 lg:px-8">
        <Link to="/admissions" className="flex items-center gap-2 text-gold">
          <Award size={15} /> {school.rating} Rated English Medium School
        </Link>
        <div className="flex items-center gap-3 text-white/90">
          <a href={school.phoneHref} className="flex items-center gap-1.5"><Phone size={14} /> {school.phone}</a>
          <a href={school.emailHref} className="hidden items-center gap-1.5 sm:flex"><Mail size={14} /> {school.location}</a>
          <Link to="/virtual-tour" aria-label="Virtual tour"><Video size={15} /></Link>
        </div>
      </div>
    </div>
  );
}

function Header({ activePath }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [activePath]);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="logo-mark">
            <img src={logoImage} alt={`${school.shortName} logo`} />
          </div>
          <div className="min-w-0">
            <p className="truncate text-xl font-black leading-none tracking-wide text-ocean sm:text-2xl">SRK EM SCHOOL</p>
            <p className="mt-1 truncate text-[11px] font-semibold text-slate-500 sm:text-xs">Sarvepalli Radhakrishnan</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-700 lg:flex">
          {navItems.map((item) => <NavLink key={item.path} item={item} activePath={activePath} />)}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/enquiry" className="hidden rounded-md bg-ink px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-ocean sm:inline-flex">
            Enquiry Now
          </Link>
          <button className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-ink lg:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-soft lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => <MobileNavLink key={item.path} item={item} activePath={activePath} />)}
            <Link to="/enquiry" className="mt-2 flex min-h-12 items-center justify-center rounded-md bg-ink px-4 py-3 text-sm font-black text-white">
              Enquiry Now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MobileQuickActions() {
  return (
    <div className="mobile-quick-actions lg:hidden">
      <Link to="/apply" className="mobile-quick-link"><GraduationCap size={16} /> Apply</Link>
      <Link to="/virtual-tour" className="mobile-quick-link"><Play size={16} fill="currentColor" /> Tour</Link>
      <a href={school.phoneHref} className="mobile-quick-link"><Phone size={16} /> Contact</a>
    </div>
  );
}

function BackToTop() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <button
      type="button"
      className={`back-to-top ${shown ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <ArrowRight size={18} />
    </button>
  );
}

function NavLink({ item, activePath }) {
  return <Link to={item.path} className={`nav-link ${activePath === item.path ? 'is-active' : ''}`}>{item.label}</Link>;
}

function MobileNavLink({ item, activePath }) {
  return (
    <Link to={item.path} className={`flex min-h-12 items-center justify-between rounded-md px-4 py-3 text-sm font-black ${activePath === item.path ? 'bg-emerald-50 text-leaf' : 'bg-slate-50 text-ink'}`}>
      {item.label} <ArrowRight size={17} />
    </Link>
  );
}

function SectionHeader({ title, action, path }) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {action ? <Link to={path} className="link-action">{action} <ArrowRight size={16} /></Link> : null}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Stats />
      <InstitutionalPromise />
      <MediaExperience />
      <AcademicsPreview />
      <ManagementStandard />
      <FacilitiesPreview />
      <UpdatesPreview />
      <Cta />
    </>
  );
}

function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Sarvepalli Radhakrishnan English Medium School campus" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/24 sm:to-white/10" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,26,69,0.08),transparent_45%,rgba(7,134,111,0.16))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mist to-transparent" />
      </div>
      <div className="hero-content relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
        <div className="max-w-xl animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-extrabold text-leaf shadow-sm ring-1 ring-emerald-100 backdrop-blur sm:text-sm">
            <CheckCircle2 size={16} /> English medium • Co-ed • Reddivaripalem, Tadipatri
          </span>
          <h1 className="mt-6 text-4xl font-black leading-tight text-ink sm:text-5xl lg:text-6xl">
            Sarvepalli Radhakrishnan <span className="block text-leaf">English Medium School.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base font-medium leading-8 text-slate-700 sm:text-lg">
            A trusted co-educational English medium school in Reddivaripalem, Tadipatri, known publicly for its strong local reputation and student-focused learning environment.
          </p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link to="/about" className="btn-primary">Discover Our School <ArrowRight size={18} /></Link>
            <Link to="/virtual-tour" className="btn-secondary"><Play size={18} fill="currentColor" /> Take a Virtual Tour</Link>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {['English Medium', 'Co-ed', '4.6 Rated'].map((item) => (
              <span key={item} className="trust-chip">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-showcase animate-rise hidden lg:block">
          <div className="hero-photo-frame">
            <img src={schoolImages[1]} alt="Sarvepalli Radhakrishnan English Medium School campus preview" className="h-full w-full object-cover" />
          </div>
          <div className="hero-feature-card">
            <p className="text-xs font-black uppercase tracking-wider text-leaf">Public listing highlights</p>
            <h2 className="mt-3 text-3xl font-black leading-tight">English medium education with a co-ed campus environment.</h2>
            <div className="mt-6 grid gap-3">
              <CheckItem text={`Rated ${school.rating} based on ${school.ratingsCount}`} />
              <CheckItem text={`${school.medium} medium of instruction`} />
              <CheckItem text={`${school.type} student environment`} />
            </div>
            <Link to="/apply" className="btn-primary mt-6 w-full">Start Admission <ArrowRight size={18} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="trust-bar-section relative z-20 -mt-12 px-4 sm:px-6 lg:px-8">
      <div className="trust-bar mx-auto max-w-7xl">
        {trustMarkers.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-emerald-50 text-leaf"><CheckCircle2 size={18} /></span>
            <span className="text-sm font-black text-ink">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats-section relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-lg bg-white shadow-soft ring-1 ring-slate-100 lg:grid-cols-[1fr_auto]">
        <div className="grid divide-y divide-slate-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {stats.map(({ icon: Icon, value, label, color }) => (
            <Link key={label} to="/about" className="flex items-center gap-4 p-5 transition hover:bg-slate-50 sm:p-6">
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-md ${color}`}><Icon size={29} /></span>
              <span><span className="block text-2xl font-black text-ink">{value}</span><span className="text-sm font-semibold leading-5 text-slate-600">{label}</span></span>
            </Link>
          ))}
        </div>
        <div className="grid min-w-48 place-items-center bg-ocean p-6 text-center text-white">
          <p className="text-xl font-black"><br/>English Medium<br />Admissions</p>
          <Link to="/apply" className="mt-4 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-black text-ink transition hover:bg-amber-300">
            Apply Now <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function InstitutionalPromise() {
  return (
    <section className="page-section">
      <div className="section-kicker">Institutional Promise</div>
      <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="executive-panel grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="text-3xl font-black leading-tight">A real local school identity, presented with clarity and trust.</h2>
            <p className="mt-4 leading-8 text-slate-700">{school.name} is listed as a co-educational English medium school in Reddivaripalem, Tadipatri.</p>
            <p className="mt-3 leading-8 text-slate-700">The website now reflects the school’s public profile with authentic address details, listing highlights, photo categories, operating hours, and parent-focused admissions information.</p>
            <Link to="/about" className="link-action mt-5 inline-flex">Read More <ArrowRight size={16} /></Link>
          </div>
          <VideoTile />
        </div>
        <div className="principal-card">
          <p className="text-xs font-black uppercase tracking-wider text-leaf">School profile</p>
          <h2 className="mt-3 text-2xl font-black">{school.name}</h2>
          <p className="mt-1 text-sm font-bold text-slate-500">{school.principalRole}</p>
          <p className="mt-5 leading-8 text-slate-700">{school.principalNote}</p>
          <Link to="/about" className="btn-secondary mt-6">Principal Message</Link>
        </div>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {institutionStandards.map(({ icon: Icon, title, text }) => (
          <InfoCard key={title} icon={Icon} title={title} text={text} />
        ))}
      </div>
    </section>
  );
}

function MediaExperience() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % schoolImages.length);
    }, 3600);
    return () => window.clearInterval(timer);
  }, []);

  const highlights = [
    { title: 'Campus View', text: 'Public listing photos presented in a cleaner school-gallery experience.' },
    { title: 'Classroom Life', text: 'A visual preview for parents exploring the school on mobile.' },
    { title: 'Activities', text: 'Gallery categories include campus, classroom, extra-curricular, and sports moments.' },
  ];

  return (
    <section className="page-section pt-0">
      <div className="media-experience">
        <div className="media-copy">
          <p className="section-kicker">Visual Campus Experience</p>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">A more vivid look at the school environment.</h2>
          <p className="mt-4 leading-8 text-white/78">Parents often decide with both information and feeling. This section brings the public school photos, virtual tour, and campus highlights into one premium visual experience.</p>
          <div className="mt-6 grid gap-3">
            {highlights.map((item) => (
              <div key={item.title} className="media-highlight">
                <span><Star size={16} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-7 grid gap-3 sm:flex">
            <Link to="/gallery" className="btn-primary">Open Gallery <ArrowRight size={18} /></Link>
            <Link to="/virtual-tour" className="btn-secondary">Watch Tour <Play size={18} fill="currentColor" /></Link>
          </div>
        </div>
        <div className="media-stage">
          <img src={schoolImages[active]} alt={`${school.shortName} visual highlight`} />
          <div className="media-badge">{active + 1} / {schoolImages.length}</div>
          <div className="media-thumbs">
            {schoolImages.map((src, index) => (
              <button
                type="button"
                key={src}
                className={active === index ? 'is-active' : ''}
                onClick={() => setActive(index)}
                aria-label={`Show school image ${index + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ManagementStandard() {
  return (
    <section className="page-section pt-0">
      <div className="management-band">
        <div>
          <p className="text-sm font-black uppercase tracking-wider text-gold">Parent Admission Journey</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white">A clear, guided process for every parent.</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/76">Families can use this website to explore the school profile, understand the English medium and co-ed highlights, view public photos, and start an enquiry before visiting the campus.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {admissionJourney.map((item, index) => (
            <Link to={index === 0 ? '/enquiry' : '/admissions'} key={item.title} className="journey-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoTile() {
  return (
    <Link to="/virtual-tour" className="relative min-h-64 overflow-hidden rounded-lg">
      <img src={heroImage} alt={`${school.name} campus`} className="h-full w-full object-cover" />
      <span className="absolute inset-0 grid place-items-center bg-ink/22">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-white text-ocean shadow-soft"><Play size={27} fill="currentColor" /></span>
      </span>
    </Link>
  );
}

function AcademicsPreview() {
  return (
    <section className="page-section pt-0">
      <div className="panel">
        <SectionHeader title="Academics" action="View All Programs" path="/academics" />
        <ProgramGrid />
      </div>
    </section>
  );
}

function ProgramGrid() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {programs.map(({ icon: Icon, title, range, text, slug }) => (
        <article key={title} className="card">
          <span className="grid h-14 w-14 place-items-center rounded-md bg-emerald-50 text-leaf"><Icon size={28} /></span>
          <h3 className="mt-4 text-lg font-black">{title}</h3>
          <p className="mt-1 text-sm font-bold text-slate-500">{range}</p>
          <p className="mt-3 min-h-14 text-sm leading-6 text-slate-600">{text}</p>
          <Link to={`/academics/${slug}`} className="link-action mt-4 inline-flex">Learn More <ArrowRight size={15} /></Link>
        </article>
      ))}
    </div>
  );
}

function FacilitiesPreview() {
  return (
    <section className="page-section pt-0">
      <div className="panel">
        <SectionHeader title="Our World-Class Facilities" action="View Facilities" path="/facilities" />
        <FacilityGrid compact />
      </div>
    </section>
  );
}

function FacilityGrid({ compact = false }) {
  return (
    <div className={`mt-6 grid gap-3 ${compact ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8' : 'sm:grid-cols-2 lg:grid-cols-4'}`}>
      {facilities.map(({ icon: Icon, title, text, slug }) => (
        <Link key={title} to={`/facilities/${slug}`} className="grid min-h-32 place-items-center rounded-lg border border-slate-100 bg-white p-4 text-center transition hover:-translate-y-1 hover:shadow-soft">
          <Icon className="text-leaf" size={31} />
          <p className="mt-3 text-sm font-black leading-5">{title}</p>
          {!compact ? <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p> : null}
        </Link>
      ))}
    </div>
  );
}

function UpdatesPreview() {
  return (
    <section className="page-section pt-0">
      <div className="grid gap-5 lg:grid-cols-3">
        <NewsCard />
        <EventsCard />
        <AnnouncementsCard />
      </div>
    </section>
  );
}

function NewsCard() {
  return (
    <div className="panel">
      <SectionHeader title="News & Events" action="View All" path="/news" />
      <div className="mt-5 space-y-5">{news.slice(0, 2).map((item) => <NewsRow key={item.slug} item={item} />)}</div>
    </div>
  );
}

function NewsRow({ item }) {
  return (
    <Link to={`/news/${item.slug}`} className="news-row flex gap-4 rounded-md p-1 transition hover:bg-slate-50">
      <div className="h-20 w-24 shrink-0 overflow-hidden rounded-md bg-slate-100"><img src={heroImage} alt="" className="h-full w-full object-cover" /></div>
      <span>
        <span className="block font-black">{item.title}</span>
        <span className="mt-1 block text-sm leading-5 text-slate-600">{item.text}</span>
        <span className="mt-2 block text-xs font-bold text-slate-500">{item.date}</span>
      </span>
    </Link>
  );
}

function EventsCard() {
  return (
    <div className="panel">
      <SectionHeader title="Upcoming Events" action="Calendar" path="/academic-calendar" />
      <div className="mt-5 divide-y divide-slate-100">
        {events.map((event) => (
          <Link key={event.title} to="/academic-calendar" className="flex gap-4 py-4 first:pt-0 last:pb-0">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-md bg-slate-50 text-center ring-1 ring-slate-100">
              <span className="text-xl font-black leading-none">{event.day}</span><span className="text-[11px] font-black text-ocean">{event.month}</span>
            </span>
            <span><span className="block font-black">{event.title}</span><span className="mt-1 block text-sm text-slate-600">{event.date}</span></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function AnnouncementsCard() {
  return (
    <div className="panel">
      <SectionHeader title="Announcements" action="Admissions" path="/admissions" />
      <div className="mt-5 space-y-5">
        <Announcement icon={Megaphone} title="Admissions Enquiry" text="Parents can enquire for English medium schooling through the school office or public listing contact options." path="/admissions" />
        <Announcement icon={CalendarDays} title="New Academic Session" text="The new session begins with orientation, bridge classes, and parent updates." path="/academic-calendar" />
      </div>
    </div>
  );
}

function Announcement({ icon: Icon, title, text, path }) {
  return (
    <Link to={path} className="flex gap-4 rounded-md p-1 transition hover:bg-slate-50">
      <span className="grid h-16 w-16 shrink-0 place-items-center rounded-md bg-emerald-50 text-leaf"><Icon size={30} /></span>
      <span><span className="block font-black">{title}</span><span className="mt-1 block text-sm leading-6 text-slate-600">{text}</span></span>
    </Link>
  );
}

function PageHero({ title, eyebrow, text, actions }) {
  return (
    <section className="page-hero relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,43,109,0.10),transparent_55%,rgba(243,181,37,0.18))]" />
      </div>
      <div className="page-hero-content relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl animate-rise">
          <p className="text-sm font-black uppercase tracking-wider text-leaf">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 text-base font-medium leading-8 text-slate-700 sm:text-lg">{text}</p>
          {actions ? <div className="mt-7 grid gap-3 sm:flex">{actions}</div> : null}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        title={school.name}
        eyebrow="Our School"
        text={`${school.name} is a co-educational English medium school serving families in ${school.location}.`}
        actions={<><Link className="btn-primary" to="/admissions">Admissions <ArrowRight size={18} /></Link><Link className="btn-secondary" to="/virtual-tour">Virtual Tour <Play size={18} /></Link></>}
      />
      <section className="page-section">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="panel">
            <SectionHeader title="Principal's Message" />
            <div className="mt-8 flex gap-4">
              <div className="grid h-20 w-20 shrink-0 place-items-center rounded-lg bg-ocean text-white"><GraduationCap size={38} /></div>
              <div>
                <h3 className="text-xl font-black">{school.principal}</h3>
                <p className="mt-1 text-sm font-bold text-leaf">{school.principalRole}</p>
                <p className="mt-4 leading-8 text-slate-700">{school.principalNote}</p>
              </div>
            </div>
          </div>
          <div className="panel">
            <SectionHeader title="Vision & Mission" />
            <div className="mt-8 space-y-4">
              <CheckItem text="Provide safe, inclusive, and inspiring education for every child." />
              <CheckItem text="Build strong foundations in academics, language, creativity, and values." />
              <CheckItem text="Prepare confident learners with discipline, empathy, and responsibility." />
            </div>
          </div>
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-3">{reasons.map(({ icon: Icon, title, text }) => <InfoCard key={title} icon={Icon} title={title} text={text} />)}</div>
      </section>
    </>
  );
}

function AcademicsPage() {
  return (
    <>
      <PageHero title="Academics" eyebrow="English Medium Instruction" text="A well-rounded school education with academic subjects, arts, physical education, communication, and activity-based learning." actions={<Link className="btn-primary" to="/apply">Apply for Admission <ArrowRight size={18} /></Link>} />
      <section className="page-section"><div className="panel"><SectionHeader title="Choose a Program" /><ProgramGrid /></div></section>
    </>
  );
}

function ProgramPage({ program }) {
  const Icon = program.icon;
  return (
    <>
      <PageHero title={program.title} eyebrow={program.range} text={program.text} actions={<><Link className="btn-primary" to="/apply">Apply Now <ArrowRight size={18} /></Link><Link className="btn-secondary" to="/academics">All Programs</Link></>} />
      <section className="page-section">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div className="panel">
            <Icon className="text-leaf" size={42} />
            <h2 className="mt-4 text-2xl font-black">Program Highlights</h2>
            <div className="mt-5 grid gap-3">{program.details.map((item) => <CheckItem key={item} text={item} />)}</div>
          </div>
          <ContactStrip />
        </div>
      </section>
    </>
  );
}

function AdmissionsPage() {
  const steps = ['Submit enquiry or application', 'Meet the admission counsellor', 'School visit and interaction', 'Document verification', 'Admission confirmation'];
  return (
    <>
      <PageHero title="Admissions Enquiry" eyebrow="English Medium School" text={`Begin your child’s school enquiry for ${school.name} with clear contact, campus visit, and document guidance.`} actions={<><Link className="btn-primary" to="/apply">Start Enquiry <ArrowRight size={18} /></Link><Link className="btn-secondary" to="/fee-structure">Fee Structure</Link></>} />
      <section className="page-section">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="panel"><h2 className="text-2xl font-black">Admission Process</h2><div className="mt-5 grid gap-3">{steps.map((step, index) => <CheckItem key={step} text={`${index + 1}. ${step}`} />)}</div></div>
          <ContactStrip />
        </div>
      </section>
    </>
  );
}

function LifePage() {
  return (
    <>
      <PageHero title="Life @ SRK" eyebrow="Clubs, sports, arts, values" text="Students learn beyond classrooms through sports, assemblies, competitions, creative clubs, service activities, and celebrations." actions={<><Link className="btn-primary" to="/virtual-tour">Take Virtual Tour <Play size={18} /></Link><Link className="btn-secondary" to="/gallery">View Gallery</Link></>} />
      <section className="page-section"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{['Sports & Fitness', 'Clubs & Societies', 'Arts & Culture', 'Student Leadership'].map((title) => <InfoCard key={title} icon={Star} title={title} text="Structured activities that help students build confidence, teamwork, expression, and leadership." />)}</div></section>
    </>
  );
}

function FacilitiesPage() {
  return (
    <>
      <PageHero title="Facilities" eyebrow="Campus Resources" text="A safe, well-equipped campus designed for learning, movement, creativity, and confidence." actions={<Link className="btn-primary" to="/virtual-tour">View Campus Tour <ArrowRight size={18} /></Link>} />
      <section className="page-section"><div className="panel"><SectionHeader title="Explore Facilities" /><FacilityGrid /></div></section>
    </>
  );
}

function FacilityPage({ facility }) {
  const Icon = facility.icon;
  return (
    <>
      <PageHero title={facility.title} eyebrow="Facility Detail" text={facility.text} actions={<><Link className="btn-primary" to="/enquiry">Ask About This <ArrowRight size={18} /></Link><Link className="btn-secondary" to="/facilities">All Facilities</Link></>} />
      <section className="page-section"><div className="panel"><Icon className="text-leaf" size={46} /><h2 className="mt-4 text-2xl font-black">What Students Get</h2><p className="mt-4 leading-7 text-slate-700">This facility supports safe, hands-on, and engaging learning throughout the school day. Parents can visit the campus to understand the space and routines in detail.</p></div></section>
    </>
  );
}

function NewsPage() {
  return (
    <>
      <PageHero title="News & Events" eyebrow="School Updates" text="Latest notices, celebrations, competitions, orientations, and upcoming calendar items." actions={<Link className="btn-primary" to="/academic-calendar">Academic Calendar <ArrowRight size={18} /></Link>} />
      <section className="page-section"><div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]"><div className="panel"><SectionHeader title="Latest News" /> <div className="mt-5 grid gap-4">{news.map((item) => <NewsRow key={item.slug} item={item} />)}</div></div><div className="grid gap-5"><EventsCard /><AnnouncementsCard /></div></div></section>
    </>
  );
}

function ArticlePage({ article }) {
  return (
    <>
      <PageHero title={article.title} eyebrow={article.date} text={article.text} actions={<><Link className="btn-primary" to="/news">All News <ArrowRight size={18} /></Link><Link className="btn-secondary" to="/gallery">Gallery</Link></>} />
      <section className="page-section"><div className="panel"><img src={heroImage} alt="" className="h-64 w-full rounded-lg object-cover" /><p className="mt-5 leading-8 text-slate-700">Students, teachers, and parents are invited to participate and celebrate the SRK community spirit. More photos and updates will be shared through school announcements.</p></div></section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero title="Contact the School" eyebrow={school.location} text="Use the public listing contact option or visit the school address for admissions, timings, and campus information." actions={<><Link className="btn-primary" to="/enquiry">Send Enquiry <Send size={18} /></Link><a className="btn-secondary" href={school.phoneHref}>Justdial Contact</a></>} />
      <section className="page-section"><div className="grid gap-5 lg:grid-cols-[0.9fr_1fr]"><ContactStrip /><EnquiryForm title="Quick Contact Form" /></div></section>
    </>
  );
}

function EnquiryPage({ mode }) {
  return (
    <>
      <PageHero title={mode} eyebrow={school.shortName} text="Share your details for an admission or campus visit enquiry." actions={<Link className="btn-secondary" to="/contact">Contact Details</Link>} />
      <section className="page-section"><EnquiryForm title={mode} /></section>
    </>
  );
}

function EnquiryForm({ title }) {
  return (
    <form className="panel grid gap-4" onSubmit={(event) => { event.preventDefault(); navigate('/thank-you'); }}>
      <h2 className="text-2xl font-black">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="field" placeholder="Parent name" required />
        <input className="field" placeholder="Mobile number" required />
        <input className="field" placeholder="Student name" required />
        <select className="field" defaultValue="" required><option value="" disabled>Select class</option><option>Nursery</option><option>Class I</option><option>Class VI</option><option>Class IX</option><option>Class XI</option></select>
      </div>
      <textarea className="field min-h-28" placeholder="Message" />
      <button type="submit" className="btn-primary w-full border-0 sm:w-fit">Submit Enquiry <Send size={18} /></button>
    </form>
  );
}

function VirtualTourPage() {
  return (
    <>
      <PageHero title="Virtual Tour" eyebrow="Campus Preview" text="Preview the school campus and public photo highlights from the listing." actions={<Link className="btn-primary" to="/gallery">Open Gallery <ArrowRight size={18} /></Link>} />
      <section className="page-section">
        <div className="grid gap-5">
          <TourVideoPlayer />
          <AnimatedTourFallback />
          <div className="panel"><SectionHeader title="Tour Highlights" /><div className="mt-6 grid gap-3 sm:grid-cols-3">{facilities.slice(0, 3).map((item) => <CheckItem key={item.title} text={item.title} />)}</div></div>
        </div>
      </section>
    </>
  );
}

function TourVideoPlayer() {
  return (
    <div className="overflow-hidden rounded-lg bg-ink shadow-soft">
      <video className="aspect-video w-full bg-ink object-cover" controls playsInline preload="metadata" poster={heroImage}>
        <source src={tourVideo} type="video/webm" />
      </video>
      <div className="grid gap-4 bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div><h2 className="text-xl font-black">{school.shortName} Virtual Tour</h2><p className="mt-1 text-sm leading-6 text-slate-600">A mobile-friendly campus tour video and visual preview for parents.</p></div>
        <a href={tourVideo} className="btn-secondary" download>Download Video <Download size={17} /></a>
      </div>
    </div>
  );
}

function AnimatedTourFallback() {
  return (
    <div className="tour-film relative overflow-hidden rounded-lg bg-ink text-white shadow-soft">
      <img src={heroImage} alt={`${school.name} campus tour`} className="tour-film-image absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-ink/20" />
      <div className="relative flex min-h-[420px] flex-col justify-end p-5 sm:p-8">
        <p className="text-sm font-black uppercase tracking-wider text-leaf">Campus Highlights</p>
        <h2 className="mt-3 max-w-md text-4xl font-black leading-tight text-ink sm:text-5xl">Experience {school.shortName}</h2>
        <p className="mt-4 max-w-md text-base font-semibold leading-7 text-slate-700">Smart classrooms, science labs, safe campus routines, sports, arts, and student life.</p>
      </div>
    </div>
  );
}

function QuickInfoPage({ page }) {
  const Icon = page.icon;
  const items = {
    '/fee-structure': ['Admission fee details are available from the office.', 'Monthly and annual payment schedules are shared during counselling.', 'Transport and activity charges are explained separately.'],
    '/academic-calendar': ['Term dates, exams, holidays, and activity days are planned in advance.', 'Parent meetings and orientation days are included.', 'Updates are shared through school announcements.'],
    '/transport': ['Bus routes are planned by area and seat availability.', 'Pickup and drop points are supervised.', 'Parents can confirm route timing with the transport desk.'],
    '/downloads': ['Admission form', 'School prospectus', 'Academic calendar', 'Transport request form'],
    '/gallery': ['Campus spaces', 'Classroom moments', 'Sports and activities', 'Celebrations and events'],
  }[page.path] || ['Information is available from the school office.'];

  return (
    <>
      <PageHero title={page.title} eyebrow="Information" text={page.text} actions={<><Link className="btn-primary" to="/enquiry">Ask Office <ArrowRight size={18} /></Link><Link className="btn-secondary" to="/contact">Contact</Link></>} />
      <section className="page-section"><div className="panel"><Icon className="text-leaf" size={46} /><h2 className="mt-4 text-2xl font-black">{page.title} Details</h2><div className="mt-5 grid gap-3">{items.map((item) => <CheckItem key={item} text={item} />)}</div></div></section>
    </>
  );
}

function GalleryPage() {
  const categories = ['Campus', 'Classroom', 'Activities', 'Sports', 'School Profile', 'Highlights'];
  return (
    <>
      <PageHero title="Gallery" eyebrow="Public Photo Highlights" text="Campus, classroom, and extra-curricular photo highlights based on the public listing gallery categories." actions={<Link className="btn-primary" to="/virtual-tour">Virtual Tour <ArrowRight size={18} /></Link>} />
      <section className="page-section">
        <div className="gallery-grid">
          {schoolImages.concat(schoolImages.slice(0, 1)).map((src, index) => (
            <figure key={`${src}-${index}`} className={index === 0 ? 'gallery-card featured' : 'gallery-card'}>
              <img src={src} alt={`${school.shortName} ${categories[index] || 'gallery'} ${index + 1}`} />
              <figcaption>
                <span>{categories[index] || 'Gallery'}</span>
                <strong>{school.shortName}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

function PolicyPage({ title }) {
  return (
    <>
      <PageHero title={title} eyebrow={school.shortName} text="Important policy information for parents and visitors." actions={<Link className="btn-primary" to="/contact">Contact School <ArrowRight size={18} /></Link>} />
      <section className="page-section"><div className="panel space-y-4 leading-7 text-slate-700"><p>{school.shortName} uses parent and student information only for admission, school communication, transport, fee, and academic support processes.</p><p>For official terms, updated policies, and detailed documents, please contact the school office.</p></div></section>
    </>
  );
}

function ThankYouPage() {
  return <PageHero title="Thank You" eyebrow="Enquiry Received" text="Your enquiry has been submitted in this static demo flow. The school office contact details are available on the contact page." actions={<><Link className="btn-primary" to="/contact">Contact Page <ArrowRight size={18} /></Link><Link className="btn-secondary" to="/">Back Home</Link></>} />;
}

function NotFoundPage() {
  return <PageHero title="Page Not Found" eyebrow={school.shortName} text="This page is not available yet." actions={<Link className="btn-primary" to="/">Back to Home <ArrowRight size={18} /></Link>} />;
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <article className="card">
      <span className="grid h-12 w-12 place-items-center rounded-md bg-emerald-50 text-leaf"><Icon size={25} /></span>
      <h3 className="mt-4 text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

function CheckItem({ text }) {
  return <p className="flex gap-3 rounded-md bg-slate-50 p-3 text-sm font-bold text-slate-700"><CheckCircle2 className="shrink-0 text-leaf" size={19} /> {text}</p>;
}

function ContactStrip() {
  return (
    <div className="panel">
      <h2 className="text-2xl font-black">School Office</h2>
      <div className="mt-5 space-y-4 text-sm font-semibold text-slate-700">
        <p className="flex gap-3"><MapPin className="shrink-0 text-ocean" size={19} /> {school.address}</p>
        <a href={school.phoneHref} className="flex gap-3"><Phone className="text-ocean" size={19} /> {school.phone}</a>
        <a href={school.emailHref} className="flex gap-3"><Mail className="text-ocean" size={19} /> {school.email}</a>
        <p className="flex gap-3"><Clock className="text-ocean" size={19} /> {school.hours}</p>
      </div>
      <Link to="/enquiry" className="btn-primary mt-6 w-full">Send Enquiry <ArrowRight size={18} /></Link>
    </div>
  );
}

function Cta() {
  return (
    <section className="px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-lg bg-ocean px-6 py-7 text-white shadow-soft sm:flex-row sm:items-center lg:px-10">
        <div><h2 className="text-2xl font-black">Ready to Join the SRK Family?</h2><p className="mt-2 text-sm font-medium text-white/82">Take the first step towards a brighter future for your child.</p></div>
        <Link to="/enquiry" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-gold px-8 py-3 text-sm font-black text-ink transition hover:bg-amber-300 sm:w-auto">
          Enquiry Now <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.9fr_1.2fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="logo-mark"><img src={logoImage} alt={`${school.shortName} logo`} /></div>
            <div><p className="text-2xl font-black leading-none text-ocean">SRK EM SCHOOL</p><p className="mt-1 text-xs font-semibold text-slate-500">Sarvepalli Radhakrishnan</p></div>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">{school.name} is listed as a co-educational English medium school in {school.location}.</p>
          <div className="mt-5 flex gap-3 text-ocean"><Link to="/contact"><Share2 size={19} /></Link><Link to="/virtual-tour"><Video size={20} /></Link></div>
        </div>
        <FooterLinks title="Quick Links" items={navItems} />
        <FooterLinks title="Important Links" items={quickPages.map(({ title, path }) => ({ label: title, path }))} />
        <FooterLinks title="Academics" items={programs.map(({ title, slug }) => ({ label: title, path: `/academics/${slug}` }))} />
        <div>
          <h3 className="footer-heading">Contact Us</h3>
          <div className="mt-4 space-y-3 text-sm font-medium text-slate-600">
            <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-ocean" size={18} /> {school.address}</p>
            <a href={school.phoneHref} className="flex items-center gap-3"><Phone className="text-ocean" size={18} /> {school.phone}</a>
            <a href={school.emailHref} className="flex items-center gap-3"><Mail className="text-ocean" size={18} /> {school.email}</a>
          </div>
        </div>
      </div>
      <div className="bg-ink px-4 py-4 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs font-semibold">
          <p>© 2026 {school.shortName}. All Rights Reserved.</p>
          <p className="flex items-center gap-3"><Link to="/privacy">Privacy Policy</Link><span>|</span><Link to="/terms">Terms & Conditions</Link><ChevronDown size={14} /></p>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="footer-heading">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm font-medium text-slate-600">
        {items.map((item) => <li key={item.path}><Link to={item.path} className="transition hover:text-leaf">{item.label}</Link></li>)}
      </ul>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
