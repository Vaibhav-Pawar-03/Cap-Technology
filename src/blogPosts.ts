export type BlogPost = {
  slug: string
  category: string
  title: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  keywords: [string, string, string]
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[]
  faq: { question: string; answer: string }[]
  serviceSlug: string
  serviceLabel: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'google-business-profile-checklist-local-businesses',
    category: 'LOCAL DISCOVERY',
    title: 'A practical Google Business Profile checklist for local businesses',
    excerpt: 'A clear, maintenance-friendly checklist for keeping your business details useful and consistent across Google Search and Maps.',
    metaTitle: 'Google Business Profile Checklist for Local Businesses',
    metaDescription: 'Use this Google Business Profile checklist to review business details, categories, hours, photos, services and reviews for local discovery.',
    keywords: ['Google Business Profile checklist', 'Google Business Profile optimization for Pune', 'Google Maps listing checklist'],
    serviceSlug: 'seo',
    serviceLabel: 'Explore our SEO services',
    sections: [
      { heading: 'Start with the details customers rely on', paragraphs: ['A Google Business Profile is often a customer’s first quick reference for a local business. Treat it like a public information page: accurate details help people decide whether to call, visit or learn more. This checklist is useful for a shop, clinic, restaurant or service business in Pune, but it does not guarantee a particular position in local results.', 'First, confirm that the profile represents an eligible business and that the person making changes has the right access. Use the real-world business name, the correct address or service area, a monitored phone number and the website customers should visit. Keep the same core details on your website and other trusted listings.'] },
      { heading: 'Complete the profile with specific information', paragraphs: ['Choose the closest accurate primary category, then add only relevant additional categories. Categories describe what the business is; they are not a place to list every keyword you hope to rank for. Add current opening hours, including special hours when needed, and explain services or products in plain language.', 'Use the description to explain what the business does, who it serves and what makes the offer clear. Avoid repetitive city names, promotional claims that cannot be supported and lists of search terms. Add recent, genuine photos that help customers recognise the location, team or work. Check that images are clear and that you have permission to publish them.'] },
      { heading: 'Keep reviews and updates useful', paragraphs: ['Invite customers to leave honest reviews without offering incentives or asking them to use specific wording. Reply in a timely, professional way. Thank people for positive feedback, and respond to concerns with care without sharing personal or confidential details.', 'Publish updates only when they help customers: changed hours, a new service, an event or a useful announcement. A profile does not need constant posts to be complete. Review contact details, categories, hours, links and photos on a regular schedule and after any business change.'] },
      { heading: 'A simple monthly review', paragraphs: ['Set a recurring reminder to check for suggested edits, unanswered reviews, outdated hours and broken website links. Use the performance information available in the profile alongside website analytics and actual enquiries. Look for patterns over time rather than treating one week of impressions or calls as proof that a change caused a result.', 'The most useful Google Business Profile checklist is one your team can maintain. Accurate information, a relevant category, helpful photos and thoughtful review responses make the listing more useful to people. Local search visibility still depends on many factors outside the profile itself.'] }
    ],
    faq: [
      { question: 'How often should I update my Google Business Profile?', answer: 'Review core details monthly and update them whenever your address, phone, hours, services or website changes. Respond to reviews as they arrive.' },
      { question: 'Does completing a profile guarantee a higher Google Maps position?', answer: 'No. A complete profile helps Google and customers understand the business, but local rankings depend on multiple factors and cannot be guaranteed.' }
    ]
  },
  {
    slug: 'seo-vs-google-ads-small-business',
    category: 'SEARCH STRATEGY',
    title: 'SEO vs Google Ads: how a small business can choose where to start',
    excerpt: 'Compare the time horizon, costs, control and measurement of organic search and paid search before choosing a first step.',
    metaTitle: 'SEO vs Google Ads for Small Businesses: How to Choose',
    metaDescription: 'Compare SEO and Google Ads for a small business. Learn how timing, budget, demand and measurement can guide your first search investment.',
    keywords: ['SEO vs Google Ads for small business', 'SEO or Google Ads for a new business', 'organic vs paid search'],
    serviceSlug: 'performance-marketing',
    serviceLabel: 'See how we approach paid campaigns',
    sections: [
      { heading: 'The short answer: choose based on the job to be done', paragraphs: ['SEO and Google Ads can both help people find a business through search, but they work differently. SEO improves the usefulness and discoverability of your website in unpaid results over time. Google Ads lets a business pay to show eligible ads for selected searches while a campaign is active. Neither is automatically the right answer for every small business.', 'If you need to test demand for a specific offer soon and can fund media spend, a tightly scoped ad campaign may help you learn. If customers research a service over time and you can invest in useful pages and site improvements, SEO may be an appropriate longer-term effort. The choice should start with customer behaviour, not a promise about speed or position.'] },
      { heading: 'Compare timing, investment and control', paragraphs: ['Paid search can begin collecting impressions and clicks after setup and review, but visibility stops when ads are paused or the budget is exhausted. Click costs vary by query, location, competition, account quality and other factors. The amount spent on advertising is separate from any management or creative fees.', 'Organic search does not charge for each click, but SEO requires time for research, technical improvements, content and ongoing review. Results are uncertain and may take time to appear. A useful comparison includes the cost of the work, the landing page, the team’s time and the business’s ability to respond to enquiries—not only a platform’s media budget.'] },
      { heading: 'Use a small test to reduce guesswork', paragraphs: ['Before spending, write down the audience, the offer, the action you want a visitor to take and how you will measure that action. Confirm that the relevant page explains the offer clearly and works well on mobile. If those basics are missing, traffic from either channel may not help you learn much.', 'For ads, agree a capped test budget and a review date. Track qualified enquiries or sales where possible, not just clicks. For SEO, choose a small group of relevant topics, improve the pages that serve them and monitor impressions, clicks and useful actions over a realistic period. Change one or two things at a time so you can understand what changed.'] },
      { heading: 'When a combined approach makes sense', paragraphs: ['Some businesses use paid search to test messages or cover immediate demand while building organic pages for longer-term discovery. Insights from search queries can inform page content; useful organic pages can also improve the experience for paid visitors. A combined approach still needs clear budgets, separate reporting and a reason for each channel.', 'Start with the constraint that matters most: time, budget, search demand, website readiness or lead follow-up capacity. Choose the activity that best addresses it, set expectations you can defend and revisit the decision when evidence changes.'] }
    ],
    faq: [
      { question: 'Is SEO cheaper than Google Ads?', answer: 'SEO has no per-click media charge, but it requires skilled work and time. Google Ads requires media spend as well as setup and management. Compare the total investment and business outcomes.' },
      { question: 'Can I run Google Ads while working on SEO?', answer: 'Yes, if the combined budget and measurement plan make sense. Keep channel costs and results distinguishable so the business can learn from each.' }
    ]
  },
  {
    slug: 'digital-marketing-budget-small-business-india',
    category: 'PLANNING',
    title: 'How to plan a digital marketing budget for a small business in India',
    excerpt: 'Build a practical budget from business goals, operating capacity and measurable tests instead of copying a generic percentage.',
    metaTitle: 'Digital Marketing Budget for Small Business in India',
    metaDescription: 'Plan a digital marketing budget for a small business in India by separating media, production and management costs, then testing priorities.',
    keywords: ['digital marketing budget for small business India', 'marketing budget allocation for small business', 'how to plan a marketing budget'],
    serviceSlug: 'analytics-strategy',
    serviceLabel: 'Discuss marketing measurement and planning',
    sections: [
      { heading: 'Begin with a business goal and a limit', paragraphs: ['There is no single digital marketing budget that fits every small business in India. A useful plan begins with a business outcome—such as a number of qualified enquiries, repeat purchases or launch awareness—and the amount the business can invest without putting essential operations at risk.', 'Work backwards from the economics you know. Estimate the value of a sale or customer, the share of enquiries that become customers and the time your team can spend following up. These figures will be rough at first. Write down the assumptions so you can replace them with actual data later. Do not treat an industry average or a competitor’s claimed spend as a prescription.'] },
      { heading: 'Separate the costs before allocating money', paragraphs: ['A marketing budget is more than ad spend. Separate media costs from strategy and management, creative production, website work, software, measurement and any one-off setup. This makes it easier to see what is recurring, what is a project cost and what can be paused.', 'List the channels you are considering and the evidence for each. Search may suit people already looking for a service. Social content may be useful for explaining a considered offer or building familiarity. Email may help a business communicate with an existing audience that has agreed to hear from it. Each channel has different production and follow-up demands.'] },
      { heading: 'Use staged allocation rather than spreading thin', paragraphs: ['Avoid dividing a small budget evenly across every platform. Select one priority audience, one clear offer and a limited number of activities that your team can execute well. Set a test period and a maximum spend, then decide in advance which signs will lead you to continue, revise or stop.', 'Protect a small amount for measurement and iteration. If the landing page is confusing or calls go unanswered, increasing media will not solve the underlying issue. A simple tracking sheet can record source, spend, qualified leads, sales and operational notes while the business establishes its baseline.'] },
      { heading: 'Review what the budget actually produced', paragraphs: ['Review the plan on a regular cadence that matches the sales cycle. Compare actual costs with the budget, check whether enquiries fit the target customer and note any changes in offer, season or follow-up. A month of data may be too little for a long sales cycle; a short campaign with an obvious mismatch may need earlier attention.', 'At the end of the test, keep the decisions transparent. Record what was learned, what remains uncertain and what you will change next. A good marketing budget is a working plan: it helps a business make deliberate choices while preserving enough flexibility to respond to evidence.'] }
    ],
    faq: [
      { question: 'What percentage should a small business spend on digital marketing?', answer: 'There is no universal percentage. Set a limit using business cash flow, customer economics, growth priorities and your ability to fulfil new demand.' },
      { question: 'Should the budget include agency or freelancer fees?', answer: 'Yes. Track service fees, creative and website costs separately from advertising media so the full cost of each activity is clear.' }
    ]
  },
  {
    slug: 'social-media-content-calendar-small-business',
    category: 'CONTENT PLANNING',
    title: 'A manageable social media content calendar for a small business',
    excerpt: 'Plan a steady, realistic month of social content using audience questions, repeatable themes and a workflow your team can sustain.',
    metaTitle: 'Social Media Content Calendar for Small Businesses',
    metaDescription: 'Create a social media content calendar for a small business with repeatable themes, a realistic posting rhythm and a simple monthly review.',
    keywords: ['social media content calendar for small business', 'monthly social media content plan', 'social media calendar template India'],
    serviceSlug: 'social-media-marketing',
    serviceLabel: 'Learn about social media support',
    sections: [
      { heading: 'Plan around audience needs, not a posting streak', paragraphs: ['A social media content calendar is a planning tool, not a requirement to publish every day. A useful calendar connects a business’s audience, offer and available time. Begin by writing down the questions customers ask before they enquire or buy. Those questions can become practical topics for posts, short videos, stories or longer explanations.', 'Choose the platforms where the intended audience is active and where your team can participate consistently. It is better to maintain a modest rhythm with useful content than to fill every channel with posts that have no clear purpose. Your schedule can change with your capacity and the kind of business you run.'] },
      { heading: 'Create a few repeatable content themes', paragraphs: ['Themes make planning easier without making every post sound the same. A local professional service might use customer education, process explanations, team perspective and timely business updates. A food business might share menu information, preparation details, availability and customer questions. Use real examples and get permission before sharing customer material.', 'For each idea, note the audience, the main point, the format and the next step. A post can inform, answer a concern, show how something works or invite a conversation. Avoid forcing a sales pitch into every update. Clear and accurate information builds a more useful presence than generic engagement prompts.'] },
      { heading: 'Use a simple monthly calendar', paragraphs: ['A spreadsheet is enough to start. Create columns for the planned date, channel, theme, idea, draft, asset, owner, approval and published link. Add a status such as idea, drafting, review, scheduled or published. Keep a small reserve of evergreen ideas for weeks when a timely post is not ready.', 'Batch similar work where possible: outline several posts, gather photos in one session and review drafts together. Leave room for unexpected updates. If a post refers to an offer, price, event or opening hour, confirm the details before scheduling it.'] },
      { heading: 'Measure learning and adjust the rhythm', paragraphs: ['Review a few metrics that relate to the purpose of the content: saves or shares for useful reference material, relevant replies for conversation, profile actions for discovery, or website visits and enquiries when the post has a clear link. Metrics are signals, not proof that one post caused a business result.', 'At month end, note which topics generated meaningful questions, which formats were practical to produce and what took too much effort. Use those observations to plan the next month. A sustainable social media content calendar becomes more useful when it reflects how the business and its audience actually behave.'] }
    ],
    faq: [
      { question: 'How many times a week should a small business post?', answer: 'Choose a cadence your team can sustain and that gives your audience useful information. The right frequency varies by platform, business and available resources.' },
      { question: 'What should a social media calendar include?', answer: 'Include the date, platform, content theme, idea, format, owner, approval status and published link. Add a goal or call to action when it helps clarify the post.' }
    ]
  },
  {
    slug: 'website-service-page-seo-checklist',
    category: 'WEBSITE CONTENT',
    title: 'A service page SEO checklist that helps visitors make a decision',
    excerpt: 'Review the content, structure and next steps on a service page before launch, with the visitor’s questions at the centre.',
    metaTitle: 'Website Service Page SEO Checklist | CAP Technology',
    metaDescription: 'Use this website service page SEO checklist to clarify the offer, answer buyer questions, improve page structure and add a useful next step.',
    keywords: ['website service page SEO checklist', 'how to write a service page', 'service page content checklist'],
    serviceSlug: 'web-design-development',
    serviceLabel: 'Explore website design and development',
    sections: [
      { heading: 'Make the service clear at the top', paragraphs: ['A service page should help a visitor quickly understand what is offered and whether it is relevant to them. Start with a specific heading, a short explanation of the service and a clear next step. Avoid vague introductions that delay the answer or make claims the business cannot support.', 'Use the language customers use when they describe the problem, but do not repeat a phrase unnaturally. One page should have one primary purpose. If two services have different audiences, scope or buying questions, separate pages may be easier for people to understand.'] },
      { heading: 'Answer the questions a buyer is likely to ask', paragraphs: ['Explain who the service is for, what the work can include and how the process typically works. Clarify what is included, what depends on the project and what the visitor needs to provide. If pricing varies, explain the factors that affect scope rather than inventing a fixed number.', 'Add proof only when it is accurate and approved: a relevant case study, a named client relationship, a credential or a testimonial with permission. If evidence is not available, useful process details and honest limits are better than inflated promises.'] },
      { heading: 'Organise the page for scanning and search', paragraphs: ['Use one clear H1, descriptive subheadings and concise paragraphs. Break complex details into lists when that makes them easier to compare. Add internal links to related services, relevant articles and contact options so a visitor can continue their research without starting over.', 'Write a distinct title tag and meta description that accurately represent the page. Check that the page has a clean URL, descriptive image text, a canonical URL and no accidental indexing block. Search engines may rewrite titles and snippets, so write for clarity rather than treating character counts as guarantees.'] },
      { heading: 'Check the experience before publishing', paragraphs: ['Review the page on a phone and desktop. Confirm that the main information appears without excessive scrolling, links work, forms are accessible and the next step is easy to find. Compress images and check loading performance; avoid adding decorative elements that obscure content or slow the page without a purpose.', 'Finally, verify analytics and enquiry tracking where applicable. After launch, review search queries, relevant visits and enquiries. A service page SEO checklist is a quality-control aid, not a ranking shortcut. Keep improving the page when customer questions or the service itself change.'] }
    ],
    faq: [
      { question: 'How long should a service page be for SEO?', answer: 'There is no ideal word count. Include enough accurate detail to answer the audience’s real questions without padding the page with repetitive text.' },
      { question: 'Should every service have its own page?', answer: 'Give a service its own page when it has a distinct offer, audience or decision process. Avoid creating near-duplicate pages just to target slightly different keywords.' }
    ]
  }
]
