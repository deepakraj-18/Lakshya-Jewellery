import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { DiamondIcon } from '../components/header/HeaderIcons'
import logo from '../assets/img/logo.png'

function ChevronLeftIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m15 6-6 6 6 6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M4.5 4.5h4l2 5-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5 5 2v4a2 2 0 0 1-2 2 16 16 0 0 1-15-15 2 2 0 0 1 2-2Z" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.5 4.5 5.5v6c0 5 3.3 8.3 7.5 10 4.2-1.7 7.5-5 7.5-10v-6L12 2.5Z" />
    </svg>
  )
}

function StarIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7L10 1.5Z" />
    </svg>
  )
}

function StoreIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M3 3h18l1.5 5h-21L3 3Z" />
      <path d="M4 8v13h16V8" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 21v-6h5v6" fill="white" />
    </svg>
  )
}

function CrownIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M3 8.5 7 11l5-6.5L17 11l4-2.5-1.5 9.5h-15L3 8.5Z" />
      <path d="M4.5 20h15v1.5h-15Z" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m5 12 5 5 9-10" />
    </svg>
  )
}

function MinusIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M5 12h14" />
    </svg>
  )
}

function PlusIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

const trustPoints = [
  { icon: ShieldIcon, label: 'Trust of TATA' },
  { icon: StarIcon, label: 'Assured Bonus' },
  { icon: StoreIcon, label: 'Redeem Online/Store' },
]

const plans = [
  {
    key: 'edge',
    name: 'EDGE',
    icon: CrownIcon,
    iconClassName: 'text-amber-500',
    badge: 'MOST POPULAR',
    tagline: '10th Month Free + Gold Value',
    taglineClassName: 'text-amber-600',
    features: [
      'Pay 9 instalments & get the 10th free',
      'Instalment value converted as per gold rate',
      'Buy jewellery after 10th month',
    ],
    cardClassName: 'bg-amber-50',
  },
  {
    key: 'icon',
    name: 'ICON',
    icon: DiamondIcon,
    iconClassName: 'text-purple-500',
    tagPill: '10th Month Free',
    features: ['Pay 9 instalments & get the 10th free', 'Buy jewellery after 10th month'],
    cardClassName: 'bg-white',
  },
]

const compareRows = [
  { label: 'You Pay 9 Instalments', edge: '₹45,000', icon: '₹45,000' },
  {
    label: 'Gold Value Returns*',
    note: '(Adjust slider to see approx returns)',
    slider: true,
    edge: '₹2,250*',
    icon: 'Not Available',
    iconMuted: true,
  },
  { label: 'Lakshya Discount (10th Month)', edge: '₹5,000', icon: '₹5,000' },
  {
    label: 'Buy Jewellery Worth',
    bold: true,
    edge: '₹52,250*',
    icon: '₹50,000',
    edgeClassName: 'text-amber-600',
    iconClassName: 'text-purple-600',
  },
]

const faqCategories = [
  {
    category: 'Cancellation/Refund',
    faqs: [
      {
        question: 'Can I cancel my Lakshya Treasure Chest plan at any time?',
        answer:
          'Yes, you can cancel your plan any time before the 10th instalment. Amounts already paid are refunded as per the applicable terms, without the bonus benefit.',
      },
    ],
  },
  {
    category: 'Lakshya Treasure Chest Edge',
    faqs: [
      {
        question: 'What is Lakshya Treasure Chest Edge Scheme?',
        answer:
          'Edge is our flagship savings scheme where your 9 monthly instalments are converted at the prevailing gold rate, and Lakshya adds the 10th instalment for free.',
      },
      {
        question: 'What are the benefits of the Lakshya Treasure Chest Edge Scheme?',
        answer:
          'You get the 10th month free plus your instalments benefit from any rise in gold value, maximising what you can redeem toward jewellery.',
      },
      {
        question: 'Can I switch between Lakshya Treasure Chest Schemes during the term?',
        answer:
          'You can switch between Edge and Icon only before your first instalment is paid. Once the plan is active, switching is not permitted.',
      },
    ],
  },
  {
    category: 'Generic',
    faqs: [
      {
        question: 'What is the minimum amount that I need to set aside every month?',
        answer:
          'You can start your Treasure Chest plan with a monthly instalment of as little as ₹1,000, with no upper limit.',
      },
      {
        question: 'When do I need to select my plan?',
        answer:
          'You can choose between Edge and Icon while setting up your plan, before your first instalment is paid.',
      },
    ],
  },
]

function TreasureChestHeader() {
  const navigate = useNavigate()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            aria-label="Go back"
            className="!text-slate-500 transition hover:!text-slate-800"
            onClick={() => navigate(-1)}
            type="button"
          >
            <ChevronLeftIcon className="size-5" />
          </button>
          <Link to="/">
            <img alt="Lakshya Jewellery logo" className="h-8 w-auto sm:h-10" src={logo} />
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            className="hidden items-center gap-1.5 text-xs font-semibold !text-slate-600 sm:flex sm:text-sm"
            href="tel:+914442935000"
            style={{textDecoration:'none'}}
          >
            <PhoneIcon className="size-4 !text-[#4f3267]" />
            Call Us
          </a>
          <button
            className="!rounded-lg bg-[#4f3267] px-3 py-2 !text-xs !font-semibold text-white transition hover:bg-[#3c2650] sm:px-5 sm:text-sm"
            type="button"
          >
            START PLAN
          </button>
        </div>
      </div>
    </header>
  )
}

function TrustBadge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-slate-500 sm:text-sm">
      <Icon className="size-3.5 shrink-0 text-purple-500" />
      {label}
    </div>
  )
}

function PlanCard({ plan }) {
  const Icon = plan.icon

  return (
    <div className={`relative rounded-2xl p-6 shadow-xl/30 ${plan.cardClassName}`}>
      {plan.badge ? (
        <span className="absolute -top-3 right-6 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-bold text-white">
          {plan.badge}
        </span>
      ) : null}

      <div className="flex items-center gap-2">
        <Icon className={`size-8 shrink-0 ${plan.iconClassName}`} />
        <h3 className="!text-md !mb-0 font-bold text-slate-900">{plan.name}</h3>
      </div>

      {plan.tagline ? (
        <p className={`mt-3 text-xs font-bold ${plan.taglineClassName}`}>{plan.tagline}</p>
      ) : null}
      {plan.tagPill ? (
        <span className="mt-3 inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-600">
          {plan.tagPill}
        </span>
      ) : null}

      <ul className="mt-4 !pl-0 flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li className="flex items-start gap-2 !text-[.95rem] text-slate-600" key={feature}>
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        className="mx-auto mt-6 flex items-center gap-1 text-sm !font-bold text-slate-900"
        type="button"
      >
        <ChevronRightIcon className="size-4" />
        START PLAN
      </button>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-2xl !font-bold text-slate-900 sm:text-3xl">Pay 9 Instalments</h1>
        <p className="mt-1 text-2xl font-extrabold text-[#4f3267] sm:text-4xl">
          Get the 10th Month Free!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {trustPoints.map((point) => (
            <TrustBadge key={point.label} {...point} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
        {plans.map((plan) => (
          <PlanCard key={plan.key} plan={plan} />
        ))}
      </div>
    </section>
  )
}

function CompareSection() {
  const [instalment, setInstalment] = useState(5000)
  const [returnPercent, setReturnPercent] = useState(5)

  const edgeGoldReturn = Math.round(instalment * 9 * (returnPercent / 100) * 0.05)

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="text-center text-xl !font-bold !text-[#4f3267] sm:text-2xl">
        Calculate &amp; Compare Plans
      </h2>

      <div className="mt-6 flex flex-col gap-3 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div>
          <p className="text-xs text-slate-500">Your Monthly Instalment</p>
          <div className="mt-1 flex items-center gap-3">
            <button
              aria-label="Decrease instalment"
              className="flex size-7 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:bg-slate-100"
              onClick={() => setInstalment((value) => Math.max(1000, value - 500))}
              type="button"
            >
              <MinusIcon className="size-3.5" />
            </button>
            <button
              aria-label="Increase instalment"
              className="flex size-7 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:bg-slate-100"
              onClick={() => setInstalment((value) => value + 500)}
              type="button"
            >
              <PlusIcon className="size-3.5" />
            </button>
            <span className="text-lg font-bold text-slate-900">
              ₹{instalment.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className="size-1.5 rounded-full bg-slate-400" />
          Current 24KT Gold Rate ₹5,666
        </div>
      </div>

      <div className="mt-6">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr>
              <th className="w-[38%] pb-3 !text-md !font-bold text-slate-500 sm:text-sm">
                Benefits
              </th>
              <th className="w-[20%] px-1 sm:px-2">
                <span className="flex items-center justify-center gap-1 rounded-t-lg bg-[#C69C54] py-3 !text-lg font-bold text-white sm:gap-1.5 sm:text-sm">
                  <CrownIcon className="size-3.5 shrink-0 sm:size-6" />
                  EDGE
                </span>
              </th>
              <th className="w-[20%] px-1 sm:px-2">
                <span className="flex items-center justify-center gap-1 rounded-t-lg bg-[#8E44AD] py-3 !text-lg font-bold text-white sm:gap-1.5 sm:text-sm">
                  <DiamondIcon className="size-3.5 shrink-0 sm:size-6" />
                  ICON
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row) => (
              <tr className="border-t border-slate-100" key={row.label}>
                <td className="py-3 pr-1 align-top sm:pr-2">
                  <p
                    className={`text-sm sm:text-sm !font-semibold !mb-0 ${row.bold ? '!font-bold !text-slate-900' : ' !text-[#231535]'}`}
                  >
                    {row.label}
                  </p>
                  {row.note ? <p className="mt-1 text-[10px] text-slate-400 sm:text-[11px]">{row.note}</p> : null}
                  {row.slider ? (
                    <div className="mt-2 max-w-[180px]">
                      <input
                        className="w-full accent-amber-500"
                        max="20"
                        min="0"
                        onChange={(event) => setReturnPercent(Number(event.target.value))}
                        type="range"
                        value={returnPercent}
                      />
                      <span className="text-[11px] text-slate-400">{returnPercent}%</span>
                    </div>
                  ) : null}
                </td>
                <td className="px-1 py-3 text-center align-top sm:px-2">
                  <span
                    className={`text-xs sm:text-sm ${row.bold ? 'font-bold' : 'font-medium'} ${
                      row.edgeClassName || 'text-slate-800'
                    }`}
                  >
                    {row.slider ? `₹${edgeGoldReturn.toLocaleString('en-IN')}*` : row.edge}
                  </span>
                </td>
                <td className="px-1 py-3 text-center align-top sm:px-2">
                  <span
                    className={`text-xs sm:text-sm ${row.bold ? '!font-bold' : 'font-medium'} ${
                      row.iconMuted ? 'text-slate-400' : row.iconClassName || 'text-slate-800'
                    }`}
                  >
                    {row.icon}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
        *This example reflects potential benefits if gold prices increase. In case of a drop in
        gold rates, the difference will be borne by the customer. Lakshya cannot be held liable
        for any loss due to market fluctuations.
      </p>
    </section>
  )
}

function FaqAccordionRow({ isOpen, onToggle, question, answer }) {
  return (
    <div className="border-b border-slate-100 py-3 last:border-0">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={onToggle}
        type="button"
      >
        <ChevronDownIcon
          className={`size-4 shrink-0 text-slate-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
        <span className="text-right text-sm text-slate-700">{question}</span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden text-right text-sm text-slate-500">{answer}</p>
      </div>
    </div>
  )
}

function FaqSection() {
  const [activeTab, setActiveTab] = useState('faqs')
  const [openKey, setOpenKey] = useState(null)

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-slate-100 p-1">
          <button
            className={`!rounded-full px-5 py-1.5 text-ms !font-semibold transition ${
              activeTab === 'faqs' ? '!bg-white !text-[#4f3267] shadow-sm' : '!text-slate-500'
            }`}
            onClick={() => setActiveTab('faqs')}
            type="button"
          >
            FAQs
          </button>
          <button
            className={`!rounded-full px-5 py-1.5 text-sm !font-semibold transition ${
              activeTab === 'terms' ? '!bg-white !text-[#4f3267] shadow-sm' : '!text-slate-500'
            }`}
            onClick={() => setActiveTab('terms')}
            type="button"
          >
            Terms &amp; Conditions
          </button>
        </div>
      </div>

      {activeTab === 'faqs' ? (
        <div className="mt-8 flex flex-col gap-8">
          {faqCategories.map(({ category, faqs }) => (
            <div key={category}>
              <h3 className="!text-[1rem] font-bold !text-[#231535]">{category}</h3>
              <div className="mt-2 rounded-xl bg-slate-50 px-4">
                {faqs.map(({ question, answer }, index) => {
                  const key = `${category}-${index}`
                  return (
                    <FaqAccordionRow
                      answer={answer}
                      isOpen={openKey === key}
                      key={key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                      question={question}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl bg-slate-50 p-5 text-sm leading-relaxed text-slate-600">
          <p>
            Lakshya Treasure Chest plans are savings schemes and not deposit or investment
            products. Instalments must be paid monthly to remain eligible for the 10th-month
            benefit. Redemption is available only against jewellery purchases at Lakshya stores
            or lakshya.com, subject to the terms shared at enrolment.
          </p>
        </div>
      )}
    </section>
  )
}

function TreasureChestPage() {
  return (
    <main className="min-h-screen !font-sans bg-white">
      <TreasureChestHeader />
      <HeroSection />
      <CompareSection />
      <FaqSection />
      <Footer />
    </main>
  )
}

export default TreasureChestPage
