import fs from 'fs';
const data = JSON.parse(fs.readFileSync('app/data/portfolio-data.json', 'utf8'));

// 1. Update Uptime Target
data.homeSections.radarSection.stats.forEach(stat => {
  if (stat.label === 'Uptime Target') {
    stat.value = 'Robust';
    stat.label = 'Reliability-First';
  }
});

// 2. Soften Language
data.homeSections.cta.headline = "Let's build\nsomething durable.";
data.contact.headerLabel = "Get in Touch";
data.contact.headlineAccent = "technical challenge.";

// 3. Skill Scores
const scores = { 'Architecture': 85, 'Data Engineering': 80, 'Security': 75, 'Performance': 70, 'Algorithms': 80, 'API Design': 85 };
data.skills.radarChart.forEach(pt => {
  if (scores[pt.subject]) pt.A = scores[pt.subject];
});

// 4. Project Links
data.projects.featured.forEach(p => {
  p.link = p.link.replace('/projects/', '/case-studies/');
});

// 5. Case studies rename
data.caseStudies['scholarship-platform'] = data.caseStudies['careerflow'];
delete data.caseStudies['careerflow'];
data.caseStudies['scholarship-platform'].title = 'Scholarship MIS';

// 6. LMS case study
data.caseStudies['lms'] = {
  title: 'Learning Management System',
  role: 'Backend & Data Engineer',
  timeline: '2024',
  stack: ['Node.js', 'Express', 'MySQL', 'Analytics'],
  color: 'lavender',
  content: {
    problem: {
      text: 'Needed a modular learning platform with behavioral tracking.',
      constraints: ['Scale to many users', 'Track events', 'Modular design']
    },
    solution: {
      overview: 'Built a modular LMS with event tracking.',
      roles: ['Student', 'Instructor'],
      workflow: ['Register', 'Take Course', 'Track Progress']
    },
    architecture: {
      backend: ['Node.js', 'Express', 'MySQL'],
      schemaDetails: 'Event tracking schema.',
      diagramPlaceholder: ''
    },
    auth: {
      strategy: 'JWT',
      rbac: 'Role-gated',
      reasoning: 'Standard security practice.'
    },
    decisions: [
      {
        decision: 'Modular Architecture',
        why: 'For scalability.',
        tradeoff: 'More initial setup.'
      }
    ],
    challenges: [
      {
        challenge: 'Tracking events accurately',
        solution: 'Used a dedicated analytics table.'
      }
    ],
    outcome: {
      result: 'Successfully deployed LMS.',
      future: ['Add more analytics']
    }
  }
};

fs.writeFileSync('app/data/portfolio-data.json', JSON.stringify(data, null, 2));
