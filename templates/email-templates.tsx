import {
  Head,
  Container,
  Html,
  Body,
  Column,
  Row,
  Text,
  Hr,
} from "@react-email/components";
import { Section } from "lucide-react";

const baseStyles = {
  body: {
    backgroundColor: "#ffffff",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  headerSection: {
    padding: "30px 0",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: "10px",
  },
  subHeading: {
    fontSize: "16px",
    color: "#666666",
  },
  section: {
    borderRadius: "8px",
    padding: "25px",
    margin: "20px 0",
    border: "1px solid #e0e0e0",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333333",
    marginBottom: "15px",
  },
  divider: {
    borderTop: "1px solid #e0e0e0",
  },
  footerSection: {
    textAlign: "center" as const,
    padding: "20px 0",
    color: "#666666",
  },
  footerText: {
    fontSize: "12px",
  },
};

const infoStyles = {
  infoRow: {
    margin: "15px 0",
  },
  infoLabel: {
    fontSize: "14px",
    color: "#666666",
    marginBottom: "8px",
  },
  infoText: {
    fontSize: "14px",
    color: "#1a1a1a",
    fontWeight: "500",
    marginBottom: "0px",
    marginTop: "0px",
  },
};

interface HeaderProps {
  title: string;
  subtitle: string;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailFooterProps {
  text: string;
}

function EmailHeader({ title, subtitle }: HeaderProps) {
  return (
    <Section style={baseStyles.headerSection}>
      <Text style={baseStyles.heading}>{title}</Text>
      <Text style={baseStyles.subHeading}>{subtitle}</Text>
    </Section>
  );
}

function EmailFooter({ text }: EmailFooterProps) {
  return (
    <Section style={baseStyles.footerSection}>
      <Text style={baseStyles.footerText}>{text}</Text>
    </Section>
  );
}

export function ContactEmailTemplate({ data }: { data: ContactData }) {
  return (
    <Html>
      <Head />
      <Body style={baseStyles.body}>
        <Container style={baseStyles.container}>
          <EmailHeader
            title="New Contact Form Submission"
            subtitle="Requires follow-up"
          />

          <Section style={baseStyles.section}>
            <Text style={baseStyles.sectionTitle}>Contact Details</Text>
            <Hr style={baseStyles.divider} />

            <Row style={infoStyles.infoRow}>
              <Column>
                <Text style={infoStyles.infoLabel}>Name</Text>
                <Text style={infoStyles.infoText}>{data.name}</Text>
              </Column>
              <Column>
                <Text style={{ ...infoStyles.infoLabel, textAlign: "right" }}>
                  Email
                </Text>
                <Text style={{ ...infoStyles.infoText, textAlign: "right" }}>
                  {data.email}
                </Text>
              </Column>
            </Row>

            <Row style={infoStyles.infoRow}>
              <Column>
                <Text style={infoStyles.infoLabel}>Subject</Text>
                <Text style={infoStyles.infoText}>{data.subject}</Text>
              </Column>
            </Row>

            <Row style={infoStyles.infoRow}>
              <Column>
                <Text style={infoStyles.infoLabel}>Message</Text>
                <Text
                  style={{
                    ...infoStyles.infoText,
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.6",
                  }}
                >
                  {data.message}
                </Text>
              </Column>
            </Row>
          </Section>

          <EmailFooter
            text={`New contact submission - ${new Date().toLocaleString()}`}
          />
        </Container>
      </Body>
    </Html>
  );
}
