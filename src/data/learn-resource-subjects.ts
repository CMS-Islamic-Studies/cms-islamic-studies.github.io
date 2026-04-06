/** Shared subject sections for Current and Previous Resources pages. */

export type ResourceLink = { href: string; label: string };

export type ResourceSubject = {
  title: string;
  body?: string;
  links?: ResourceLink[];
};

export const learnResourceSubjects: ResourceSubject[] = [
  {
    title: 'Aqeedah',
    links: [
      {
        href: 'https://archive.org/details/20240423_20240423_1042',
        label: 'الكتاب التوحيد (Arabic) — Internet Archive',
      },
      {
        href: 'https://adviceforparadise.com/media/books/kitab-at-tawhid.pdf',
        label: 'Kitab at-Tawhid (English) — PDF',
      },
    ],
  },
  {
    title: 'Usul al-Fiqh',
    links: [
      {
        href: 'https://download.ilmussalaf.com/Books/Al-Usool-Fee-Ilmil-Usool.pdf',
        label: 'الأصول في علم الأصول (Arabic) — PDF',
      },
      {
        href: 'https://ia600202.us.archive.org/26/items/TheFoundationsOfTheKnowledgeOfUsool/The_Foundations_Of_The_Knowledge_Of_Usool.pdf',
        label: 'The Foundations of the Knowledge of Usool (English) — PDF',
      },
      {
        href: 'https://docs.google.com/document/d/1esMJdEpNEHJ2USP9u5fsaFuxYlxy5Xy3rBdMg2yR59I/edit?usp=sharing',
        label: 'The Foundations of the Knowledge of Usool — Google Doc',
      },
    ],
  },
  {
    title: 'Usul al-Tafsir',
    links: [
      {
        href: 'https://dn790008.ca.archive.org/0/items/USULUNFITTEFSIRMuhammedB.SalihElUsejmin/USULUN%20FI-T-TEFSIR%20%20%20-%20%20%20Muhammed%20b.%20Salih%20el-%27Usejmin.pdf',
        label: 'أصول في التفسير (Arabic) — PDF',
      },
    ],
  },
  {
    title: 'Fiqh',
    links: [
      {
        href: 'https://dn790009.ca.archive.org/0/items/1_20221203_20221203_0157/%D9%81%D9%82%D9%87%20%D8%A7%D9%84%D8%B3%D9%86%D8%A9%20-%20%D8%A7%D9%84%D8%B3%D9%8A%D8%AF%20%D8%B3%D8%A7%D8%A8%D9%82%20%D8%AC1.pdf',
        label: 'فقه السنة — PDF (Arabic)',
      },
      {
        href: 'https://dn710201.ca.archive.org/0/items/fiqh-us-sunnah-five-volumes/fiqh-us-sunnah-five-volumes.pdf',
        label: 'Fiqh us-Sunnah — PDF (English)',
      },
    ],
  },
  {
    title: 'Hadith',
    links: [
      {
        href: 'https://40hadithnawawi.com',
        label: 'The Forty Hadith of Imam al-Nawawi — Website',
      },
      {
        href: 'https://ahadith.co.uk/downloads/Commentary_of_Forty_Hadiths_of_An-Nawawi.pdf',
        label: 'Commentary of Forty Hadiths of al-Nawawi — PDF',
      },
    ],
  },
  {
    title: 'Arabic',
    links: [
      {
        href: 'https://dn721901.ca.archive.org/0/items/al-arabi-bin-yadik-4-a-www.fasihan.ir-fasihan-ir/Al-Arabi-bin-Yadik-2-B-www.fasihan.ir-%40fasihan_ir.pdf',
        label: 'Al Arabiyyah Bayna Yadayk 2(B) — PDF',
      },
    ],
  },
];

/** Same sections as current resources, without links — add `links` when archive files are ready. */
export const previousResourceSubjects: ResourceSubject[] = [
  { title: 'Aqeedah' },
  { title: 'Usul al-Fiqh' },
  { title: 'Usul al-Tafsir' },
  { title: 'Fiqh' },
  { title: 'Hadith' },
  { title: 'Arabic' },
];
