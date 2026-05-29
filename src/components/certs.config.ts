export interface CertItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  idCode: string;
  verifyUrl: string;
  imgSrc: string;
  badgeSrc?: string;
  type: "certification" | "qualification" | "badge";
}

export const certsData: CertItem[] = [
  {
    id: "cisco-cybersecurity-landscape",
    title: "The Cybersecurity Landscape",
    issuer: "Cisco Networking Academy",
    date: "2026-05",
    idCode: "CISCO-CYBER-LAND",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/ffd31700-e040-4991-82e8-c54d599d4bc1/image.png?ut=1775695456702",
    type: "certification",
  },
  {
    id: "cisco-endpoint-security",
    title: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    date: "2026-05",
    idCode: "CISCO-END-SEC",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/83aab0d6-15f6-11ec-9621-0242ac130002/image.png?ut=1777088188585",
    type: "certification",
  },
  {
    id: "cisco-python-essentials-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "2026-03",
    idCode: "CISCO-PY-ESS1",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/407c875e-1b8b-11ec-9621-0242ac130003/image.png?ut=1769858076174",
    type: "qualification",
  },
  {
    id: "cisco-intro-data-science",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "2026-02",
    idCode: "CISCO-INTRO-DS",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/4a848e27-e505-46f7-9144-482051704e21/image.png?ut=1777085917203",
    type: "qualification",
  },
  {
    id: "cisco-digital-awareness",
    title: "Digital Awareness",
    issuer: "Cisco Networking Academy",
    date: "2026-02",
    idCode: "CISCO-DIG-AWARE",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/db59d6a5-83b6-4d15-b754-984c296c3c0a/image.png?ut=1772074604826",
    type: "qualification",
  },
  {
    id: "cisco-packet-tracer-exploring",
    title: "Exploring Networking with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "2026-02",
    idCode: "CISCO-PT-EXPL",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/3eac077b-9dad-4a19-806a-718fd90554cb/image.png?ut=1769847527242",
    type: "qualification",
  },
  {
    id: "cisco-intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2026-02",
    idCode: "CISCO-INTRO-CYBER",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/7dc6e66c-935b-4905-b315-61b12ecb801a/image.png?ut=1773282930303",
    type: "certification",
  },
  {
    id: "cisco-packet-tracer-getting-started",
    title: "Getting Started with Cisco Packet Tracer",
    issuer: "Cisco Networking Academy",
    date: "2026-02",
    idCode: "CISCO-PT-START",
    verifyUrl: "https://www.credly.com/users/ventie-ravelle",
    imgSrc:
      "https://www.netacad.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/76785269-1e27-4655-9b83-e62e008b4f2b/image.png?ut=1776900305538",
    type: "qualification",
  },
];
