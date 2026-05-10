/* eslint-disable jsx-a11y/alt-text */
'use client'

import React, { useState, useEffect } from 'react';
import { Document, Page, Text, View, Link, Image } from '@react-pdf/renderer';
import { personalInfo, experiences, educations, skills, certifications, projects } from "@/data";
import { styles } from './style';
import { capitalizeFirstLetter, formatDate, formatStartEndDate, getGitHubName, getLinkedInName, getPersonalWebsiteName, getTotalWorkingExperiences } from '@/lib/utils';
import QRCode from 'qrcode';

// Create Resume Document
const ResumeDocument = () => {
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');

  useEffect(() => {
    const generateQR = async () => {
      const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${personalInfo.fullname}
EMAIL:${personalInfo.contact.email}
TEL:${personalInfo.contact.phone}
URL:${personalInfo.contact.personalWebsite}
ADR:${personalInfo.contact.location}
END:VCARD`;

      try {
        const url = await QRCode.toDataURL(vCard, { width: 100, margin: 1 });
        setQrCodeDataUrl(url);
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };

    generateQR();
  }, []);

  return (
  <Document title={`${personalInfo.name} - Resume`} author={personalInfo.name} keywords={Object.values(skills).flat().join(', ')}>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{personalInfo.fullname}</Text>
        <Text style={styles.title}>{personalInfo.title}</Text>

        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <Image src={'/images/resume/email.png'} style={styles.contactIcon} />
            <Text style={styles.contactText}>{personalInfo.contact.email}</Text>
          </View>
          <View style={styles.contactItem}>
            <Image src={'/images/resume/phone.png'} style={styles.contactIcon} />
            <Text style={styles.contactText}>{personalInfo.contact.phone}</Text>
          </View>
        </View>

        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <Image src={'/images/resume/location.png'} style={styles.contactIcon} />
            <Text style={styles.contactText}>{personalInfo.contact.location.split(',')[0]}</Text>
          </View>
          <View style={styles.contactItem}>
            <Image src={'/images/resume/linkedin.png'} style={styles.contactIcon} />
            <Link src={personalInfo.contact.linkedin} style={styles.contactLink}>{getLinkedInName(personalInfo.contact.linkedin)}</Link>
          </View>
        </View>

        <View style={styles.contactRow}>
          <View style={styles.contactItem}>
            <Image src={'/images/resume/github.png'} style={styles.contactIcon} />
            <Link src={personalInfo.contact.github} style={styles.contactLink}>{getGitHubName(personalInfo.contact.github)}</Link>
          </View>
          <View style={styles.contactItem}>
            <Image src={'/images/resume/person.png'} style={styles.contactIcon} />
            <Link src={personalInfo.contact.personalWebsite} style={styles.contactLink}>{getPersonalWebsiteName(personalInfo.contact.personalWebsite)}</Link>
          </View>
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text style={styles.summaryText}>{personalInfo.summary}</Text>
      </View>

      {/* Achievements & Highlights */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Achievements & Highlights</Text>
        <View style={styles.bulletList}>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>🏆</Text>
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: 'bold' }}>Experience:</Text> {getTotalWorkingExperiences(experiences)} years across internships, projects, and full-time roles
            </Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>🚀</Text>
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: 'bold' }}>Projects:</Text> Successfully delivered {projects.length} diverse projects including e-commerce platforms, management systems, and web applications
            </Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>🎓</Text>
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: 'bold' }}>Education:</Text> Higher National Diploma in Computer Science (CGPA: 3.74) from SLIIT
            </Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>📜</Text>
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: 'bold' }}>Certifications:</Text> {certifications.length} professional certifications in web development and programming
            </Text>
          </View>
          <View style={styles.bulletItem}>
            <Text style={styles.bulletPoint}>💻</Text>
            <Text style={styles.bulletText}>
              <Text style={{ fontWeight: 'bold' }}>Tech Stack:</Text> Proficient in JavaScript, Java, Python, React, Node.js, and modern web technologies
            </Text>
          </View>
        </View>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        
        <View>
          {Object.entries(skills).map(([category, skillList]) => (
            <View key={category} style={styles.skillContainer}>
              <Text style={styles.skillTitle}>
                {capitalizeFirstLetter(category)}:
              </Text>
              <Text style={styles.skillItem}>
                {skillList.join(', ')}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        
        {experiences.map((job, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              {job.companyUrl ? (
                <Link src={job.companyUrl}>
                  <Text style={styles.itemCompany}>{job.company}</Text>
                </Link>
              ) : (
                <Text style={styles.itemCompany}>{job.company}</Text>
              )}
              <Text style={styles.itemDate}>
                {formatStartEndDate(job.startDate, job.endDate)}
              </Text>
            </View>
            
            <Text style={styles.itemTitle}>{job.title}</Text>
            <Text style={styles.itemLocation}>{job.location} • {job.type}</Text>
            
            <View style={styles.bulletList}>
              {job.responsibilities.slice(0, 3).map((bullet, bulletIndex) => (
                <View key={bulletIndex} style={styles.bulletItem}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.bulletText}>{bullet}</Text>
                </View>
              ))}
            </View>
            
            {/* Technologies used */}
            <View style={styles.bulletItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={{ fontWeight: 'bold' }}>Skills utilized: </Text>
                {job.skills.join(', ')}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Projects Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notable Projects</Text>

        {projects.slice(0, 3).map((project, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.itemDate}>
                {project.status} • {project.date ? formatDate(project.date, 'short') : 'N/A'}
              </Text>
            </View>

            <Text style={styles.projectDescription}>{project.description}</Text>

            {/* Links section with better styling */}
            <View style={styles.projectLinks}>
              {project.github && (
                <Link src={project.github} style={styles.projectLink}>
                  GitHub
                </Link>
              )}

              {project.demo && (
                <Link src={project.demo} style={styles.projectLink}>
                  Live Demo
                </Link>
              )}
            </View>

            {/* Technologies as tags */}
            <View style={styles.projectTech}>
              {project.techStacks.slice(0, 6).map((tech, techIndex) => (
                <Text key={techIndex} style={styles.projectTechItem}>{tech}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        
        {educations.map((edu, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemCompany}>{edu.institution}</Text>
              <Text style={styles.itemDate}>
                {formatStartEndDate(edu.startDate, edu.endDate)}
              </Text>
            </View>
            
            <Text style={styles.itemTitle}>{edu.degree}</Text>
            <Text style={styles.itemLocation}>
              {edu.location}
              {edu.cgpa && edu.cgpa !== "N/A" ? ` • CGPA: ${edu.cgpa}` : ""}
            </Text>
            
            {edu.techStacks && (
              <View style={styles.bulletItem}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>
                  <Text style={{ fontWeight: 'bold' }}>Skills utilized: </Text>
                  {edu.techStacks.join(', ')}
                </Text>
              </View>
            )}
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={{ ...styles.section, marginTop: 20 }}>
        <Text style={styles.sectionTitle}>Certifications</Text>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
          {certifications
            .slice()
            .sort((a, b) => (b.issueDate ?? "").localeCompare(a.issueDate ?? ""))
            .slice(0, 6)
            .map((cert, index) => (
            <Link key={index} src={cert.link || "#"} style={styles.certContainer}>
              <Text style={styles.certName}>{cert.name}</Text>
              <Text style={styles.certDetails}>
                {[cert.issuingOrganization, cert.issueDate ? formatDate(cert.issueDate, "short") : undefined].filter(Boolean).join(" • ") || "—"}
              </Text>
            </Link>
          ))}
        </View>
      </View>

      {/* QR Code for Contact Information */}
      <View style={{ ...styles.section, marginTop: 20, alignItems: 'center' }}>
        <Text style={styles.sectionTitle}>Contact QR Code</Text>
        <Text style={{ fontSize: 9, color: '#718096', marginBottom: 8, textAlign: 'center' }}>
          Scan to save contact information
        </Text>
        {qrCodeDataUrl && (
          <Image src={qrCodeDataUrl} style={{ width: 80, height: 80, marginTop: 4 }} />
        )}
      </View>
    </Page>
  </Document>
  );
};

export default ResumeDocument;
