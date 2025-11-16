"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "../../components/ui/button";
import { Download, FileSearch, Smartphone, Laptop } from "lucide-react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { DocumentProps } from '@react-pdf/renderer';
import { PdfViewer } from '../../components/pdf-renderer';
import { personalInfo, experiences, projects, certifications, educations } from '@/data';

interface ResumeViewerProps {
  document: React.ReactElement<DocumentProps>;
}

export default function ResumeViewerWithFallback({ document }: ResumeViewerProps) {
  const [hasPdfSupport, setHasPdfSupport] = useState<boolean | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [deviceType, setDeviceType] = useState<'desktop' | 'mobile' | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    detectDevice();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detectDevice = () => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return; 

    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (isMobile) {
      setDeviceType('mobile');
      // Skip PDF support check for mobile - just use download option
      setHasPdfSupport(false);
    } else {
      setDeviceType('desktop');
      // Continue with PDF support check for desktop
      checkPdfSupport();
    }
  };

  const checkPdfSupport = () => {
    if (typeof window === 'undefined') return;
    
    try {
      // Various checks for PDF support
      const hasAcrobat = 
        navigator?.plugins?.namedItem('Chrome PDF Viewer') || 
        navigator?.plugins?.namedItem('Adobe Acrobat') ||
        navigator?.plugins?.namedItem('PDF Viewer') ||
        // @ts-expect-error lazy to figure out why this is not working
        navigator?.mimeTypes?.['application/pdf'];
      
      const hasBuiltInViewer = ('application/pdf' in navigator.mimeTypes);
      
      // Modern browsers usually have built-in PDF capability
      const isModernBrowser = /Chrome|Firefox|Safari|Edge/.test(navigator.userAgent);
      
      setHasPdfSupport(hasAcrobat || hasBuiltInViewer || isModernBrowser);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // If any error occurs during detection, default to fallback
      setHasPdfSupport(false);
    }
  };

  if (!isClient) {
    return (
      <div className="bg-background border border-border/40 rounded-xl shadow-sm p-8 mb-8 h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-medium mb-2">Loading resume viewer...</p>
          <p className="text-muted-foreground">Please wait a moment</p>
        </div>
      </div>
    );
  }

  if (deviceType === null || (deviceType === 'desktop' && hasPdfSupport === null)) {
    // Still detecting device or checking PDF support
    return (
      <div className="bg-background border border-border/40 rounded-xl shadow-sm p-8 mb-8 h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <FileSearch className="w-16 h-16 mx-auto mb-4 text-primary animate-pulse" />
          <p className="text-xl font-medium mb-2">Preparing resume view...</p>
        </div>
      </div>
    );
  }

  // Desktop with PDF support
  if (deviceType === 'desktop' && hasPdfSupport) {
    return (
      <>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Professional Resume
            </h1>
            <p className="text-muted-foreground mt-1">
              {personalInfo.name} - {personalInfo.title}
            </p>
          </div>

          <div className="flex gap-3">
            <PDFDownloadLink
              document={document}
              fileName={`${personalInfo.name.replace(' ', '_')}_Resume.pdf`}
              className="inline-flex"
              onClick={() => setError(null)}
            >
              {({ loading, error: pdfError }) => {
                if (pdfError) {
                  setError("Failed to generate PDF. Please try again.");
                }
                return (
                  <Button disabled={loading} size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
                    <Download className="h-4 w-4" />
                    {loading ? "Preparing PDF..." : "Download Resume"}
                  </Button>
                );
              }}
            </PDFDownloadLink>
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-background to-muted/20 border border-border/40 rounded-2xl shadow-xl p-4 sm:p-6 mb-8 h-[75vh] sm:h-[85vh] overflow-hidden">
          <div className="w-full h-full rounded-xl overflow-hidden shadow-inner">
            <PdfViewer>
              {document}
            </PdfViewer>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-card border border-border/40 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{experiences.length}</div>
            <div className="text-sm text-muted-foreground">Experiences</div>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{projects.length}</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="bg-card border border-border/40 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{educations.length}</div>
            <div className="text-sm text-muted-foreground">Education</div>
          </div>
        </div>
      </>
    );
  }

  // Mobile device or desktop without PDF support
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
            Professional Resume
          </h1>
          <p className="text-muted-foreground mt-1">
            {personalInfo.name} - {personalInfo.title}
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-background to-muted/20 border border-border/40 rounded-2xl shadow-xl p-8 mb-8">
        <div className="text-center max-w-lg mx-auto">
          {deviceType === 'mobile' ? (
            <div className="relative">
              <Smartphone className="w-20 h-20 mx-auto mb-6 text-primary/70" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          ) : (
            <Laptop className="w-20 h-20 mx-auto mb-6 text-muted-foreground" />
          )}

          <h2 className="text-2xl font-bold mb-4">
            {deviceType === 'mobile'
              ? "Mobile-Optimized Experience"
              : "Enhanced PDF Download"}
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            {deviceType === 'mobile'
              ? "Download the resume to view it in your device's native PDF reader for the best experience with full formatting and interactive features."
              : "Your browser doesn't support inline PDF viewing. Download the resume to open it in your preferred PDF reader with full functionality."}
          </p>

          <div className="space-y-4">
            <PDFDownloadLink
              document={document}
              fileName={`${personalInfo.name.replace(' ', '_')}_Resume.pdf`}
              className="inline-flex w-full sm:w-auto"
            >
              {({ loading }) => (
                <Button disabled={loading} size="lg" className="gap-2 w-full shadow-lg hover:shadow-xl transition-all">
                  <Download className="h-5 w-5" />
                  {loading ? "Preparing PDF..." : "Download Resume"}
                </Button>
              )}
            </PDFDownloadLink>

            <p className="text-xs text-muted-foreground">
              PDF format • {experiences.length} experiences • {projects.length} projects • {certifications.length} certifications
            </p>
          </div>
        </div>
      </div>

      {/* Quick preview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-card border border-border/40 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">💼</span>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">{experiences.length}</div>
              <div className="text-sm text-muted-foreground">Experiences</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/40 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">🚀</span>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/40 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">🏆</span>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border/40 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">🎓</span>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">{educations.length}</div>
              <div className="text-sm text-muted-foreground">Education</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 