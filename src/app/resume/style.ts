import {
  StyleSheet,
  Font
} from '@react-pdf/renderer';

// Register more professional fonts
Font.register({
  family: 'Open Sans',
  fonts: [
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-italic.ttf', fontStyle: 'italic' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600italic.ttf', fontWeight: 600, fontStyle: 'italic' },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf', fontWeight: 700 },
    { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700italic.ttf', fontWeight: 700, fontStyle: 'italic' },
  ]
});

// Create styles for the modern resume
export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Open Sans',
    fontSize: 10,
    lineHeight: 1.4,
    color: '#1a202c',
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 15,
  },
  // Enhanced header section with modern design
  header: {
    marginBottom: 15,
    paddingBottom: 12,
    borderBottom: '3px solid #3182ce',
    backgroundColor: '#f8fafc',
    padding: 12,
    borderRadius: 6,
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#1a202c',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 14,
    color: '#4a5568',
    marginBottom: 10,
    fontWeight: 600,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    fontSize: 9,
    minWidth: 80,
  },
  contactText: {
    color: '#4a5568',
  },
  contactLink: {
    color: '#3182ce',
    textDecoration: 'none',
    fontWeight: 600,
  },
  contactIcon: {
    width: 11,
    height: 11,
  },

  // Enhanced section headers with modern styling
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1a202c',
    backgroundColor: '#f1f5f9',
    padding: '6 10',
    borderRadius: 4,
    borderLeft: '5px solid #3182ce',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  summaryText: {
    fontSize: 10,
    color: '#4a5568',
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  
  // Enhanced experience & education items with better visual hierarchy
  itemContainer: {
    marginBottom: 12,
    padding: 8,
    backgroundColor: '#f8fafc',
    borderRadius: 4,
    borderLeft: '3px solid #3182ce',
  },
  itemHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 4,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#1a202c',
    flex: 1,
    marginBottom: 4,
    marginTop: 1,
    minWidth: 0,
  },
  itemCompany: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#3182ce',
    textDecoration: 'none',
    minWidth: 0,
    flexShrink: 1,
  },
  itemDate: {
    fontSize: 9,
    color: '#718096',
    fontWeight: 600,
    backgroundColor: '#e2e8f0',
    padding: '2 6',
    borderRadius: 3,
    flexShrink: 0,
  },
  itemLocation: {
    fontSize: 9,
    color: '#718096',
    marginBottom: 5,
    marginTop: 8,
    fontStyle: 'italic',
  },
  companyLogo: {
    width: 24,
    height: 24,
  },

  // Enhanced bullet points with better styling
  bulletList: {
    marginTop: 6,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 3,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    width: 16,
    minWidth: 16,
    fontSize: 10,
    color: '#3182ce',
    marginTop: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    color: '#4a5568',
    lineHeight: 1.4,
    marginLeft: 4,
  },
  
  // Enhanced skills section with modern design
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  skillCategory: {
    width: '25%',
    marginBottom: 12,
  },
  skillCategoryTitle: {
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 6,
    color: '#1a202c',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  skillItem: {
    fontSize: 9,
    marginBottom: 4,
    color: '#4a5568',
    backgroundColor: '#e2e8f0',
    padding: '2 6',
    borderRadius: 3,
    marginRight: 4,
  },
  skillContainer: {
    fontSize: 10,
    color: '#4a5568',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
    fontFamily: 'Open Sans',
    alignItems: 'flex-start',
  },
  skillTitle: {
    fontWeight: 'bold',
    width: 80,
    minWidth: 80,
    color: '#1a202c',
    fontSize: 10,
  },

  // Enhanced projects section styling
  projectTitle: {
    fontWeight: 'bold',
    fontSize: 11,
    color: '#1a202c',
  },
  projectDescription: {
    fontSize: 9,
    color: '#4a5568',
    lineHeight: 1.4,
    marginBottom: 6,
  },
  projectLinks: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 6,
    gap: 8,
  },
  projectLink: {
    fontSize: 8,
    color: '#3182ce',
    textDecoration: 'none',
    backgroundColor: '#ebf8ff',
    padding: '3 6',
    borderRadius: 3,
    border: '1px solid #90cdf4',
  },
  projectTech: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
    gap: 4,
  },
  projectTechItem: {
    fontSize: 7,
    backgroundColor: '#f1f5f9',
    padding: '2 4',
    borderRadius: 2,
    color: '#475569',
    border: '1px solid #cbd5e0',
  },

  // Enhanced certifications with better visual design
  certContainer: {
    marginBottom: 8,
    padding: 6,
    backgroundColor: '#f8fafc',
    borderRadius: 4,
    borderLeft: '3px solid #38b2ac',
    width: '48%',
  },
  certName: {
    fontWeight: 'bold',
    fontSize: 9,
    color: '#1a202c',
    marginBottom: 2,
  },
  certDetails: {
    fontSize: 8,
    color: '#718096',
  },

  // Additional utility styles
  highlight: {
    backgroundColor: '#fef5e7',
    padding: '2 4',
    borderRadius: 2,
    fontWeight: 'bold',
    color: '#d69e2e',
  },
  accent: {
    color: '#3182ce',
    fontWeight: 'bold',
  },
});
