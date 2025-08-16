const CURRENT_SALESPERSON = "danny-sanchez"; // Change to: "sarah-johnson", "michael-rodriguez", etc.

// Data for all salespeople
const salespeopleData = {
  "danny-sanchez": {
    id: "danny-sanchez",
    firstName: "Danny",
    lastName: "Sanchez",
    fullName: "Danny Sanchez",
    title: "Senior Sales Executive",
    profileImage: "/profiles/profile-team.jpg",
    bio: "Results-driven sales professional with over 8 years of experience helping businesses scale their operations. Specialized in B2B software solutions and enterprise client relationships. ",
    bio_long:
      "Results-driven sales professional with over 8 years of experience helping businesses scale their operations. Specialized in B2B software solutions and enterprise client relationships.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. ",
    phone: "+1 (555) 123-4567",
    email: "danny.sanchez@company.com",
    location: "New York, NY",
    socialLinks: {
      linkedin: "https://linkedin.com/in/danny-sanchez",
      facebook: "https://facebook.com/danny-sanchez",
      instagram: "https://instagram.com/danny_sanchez_sales",
    },
    stats: {
      yearsExperience: 8,
      clientsSatisfied: "200+",
      dealsClosedThisYear: 45,
      revenueGenerated: "$2.3M",
    },
    specialties: [
      "Enterprise Software Sales",
      "Client Relationship Management",
      "Solution Architecture",
      "Team Leadership",
    ],
    achievements: [
      "Top Performer 2023 & 2024",
      "President's Club Winner",
      "Exceeded quota by 150% last year",
    ],
  },

  "sarah-johnson": {
    id: "sarah-johnson",
    firstName: "Sarah",
    lastName: "Johnson",
    fullName: "Sarah Johnson",
    title: "Account Executive",
    profileImage: "/profiles/sarah-profile.jpg",
    bio: "Dynamic sales professional passionate about connecting businesses with innovative solutions. Expert in SaaS platforms and digital transformation strategies.",
    phone: "+1 (555) 987-6543",
    email: "sarah.johnson@company.com",
    location: "San Francisco, CA",
    socialLinks: {
      linkedin: "https://linkedin.com/in/sarah-johnson-sales",
      facebook: "https://facebook.com/sarah.johnson",
      instagram: "https://instagram.com/sarahj_sales",
    },
    stats: {
      yearsExperience: 5,
      clientsSatisfied: "150+",
      dealsClosedThisYear: 38,
      revenueGenerated: "$1.8M",
    },
    specialties: [
      "SaaS Solutions",
      "Digital Transformation",
      "Startup Partnerships",
      "Technology Consulting",
    ],
    achievements: [
      "Rookie of the Year 2020",
      "Fastest Growing Portfolio",
      "Customer Success Award Winner",
    ],
  },

  "michael-rodriguez": {
    id: "michael-rodriguez",
    firstName: "Michael",
    lastName: "Rodriguez",
    fullName: "Michael Rodriguez",
    title: "Regional Sales Director",
    profileImage: "/profiles/michael-profile.jpg",
    bio: "Seasoned sales leader with a proven track record in building high-performing teams and expanding market presence. Focused on strategic partnerships and large-scale implementations.",
    phone: "+1 (555) 456-7890",
    email: "michael.rodriguez@company.com",
    location: "Austin, TX",
    socialLinks: {
      linkedin: "https://linkedin.com/in/michael-rodriguez-director",
      facebook: "https://facebook.com/michael.rodriguez",
      instagram: "https://instagram.com/mike_rod_sales",
    },
    stats: {
      yearsExperience: 12,
      clientsSatisfied: "500+",
      dealsClosedThisYear: 28,
      revenueGenerated: "$4.2M",
    },
    specialties: [
      "Strategic Partnerships",
      "Team Leadership",
      "Market Expansion",
      "Executive Relationships",
    ],
    achievements: [
      "Sales Director of the Year",
      "Built #1 Regional Team",
      "Expanded territory by 300%",
    ],
  },
};

// Export the current salesperson data (this is what all components will use)
export const currentSalesperson = salespeopleData[CURRENT_SALESPERSON];

// Export all data in case you need it
export const allSalespeopleData = salespeopleData;

// Export available IDs for reference
export const availableSalespeopleIds = Object.keys(salespeopleData);

/*
To switch to a different salesperson, just change CURRENT_SALESPERSON above to:
- "danny-sanchez"
- "sarah-johnson"
- "michael-rodriguez"

Then all your components will automatically use the new person's data!
*/
