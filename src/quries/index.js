export const HOME_PAGE = `
query HomePage {
  homePage {
    data {
      attributes {
        headerSection {
          id
          image {
            data {
              attributes {
                url
              }
            }
          }
          text
        }
        serviceSection {
          description
          id
          title
        }
        statsSection {
          id
          number1
          number2
          number3
          number4
          text1
          text3
          text2
          text4
        }
        callToAction {
          headline
          id
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        services {
          image {
            data {
              attributes {
                url
              }
            }
          }
          title
        }
      }
    }
  }
}
`;

export const HOME_SERVICES = `
query ServicesHomes {
    servicesHomes {
      data {
        id
        attributes {
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const HOME_VIDEO_TESTIMONIALS = `
query VideoTestimonials {
    videoTestimonials {
      data {
        attributes {
          name
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
          university
          video {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const HOME_TESTIMONIALS = `
query Testimonials {
    testimonials {
      data {
        attributes {
          description
          name
          university
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        id
      }
    }
  }
`;

export const HOME_FEATURED = `
query Featureds {
    featureds {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const HOME_UNIVERSITIES = `
query UniversitiesHomes {
    universitiesHomes {
      data {
        attributes {
          name
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const COMPARISON_TABLE = `
query ComparisonTables {
    comparisonTables {
      data {
        attributes {
          generalAdmissionRate
          rostumAdmissionRate
          university
        }
      }
    }
  }
`;

export const FOOTER = `
query Footer {
  footer {
    data {
      attributes {
        Address {
          Country
          Address
        }
        Phone {
          Country
          Phone
        }
        email
        website_routes {
          data {
            attributes {
              url
              name
            }
          }
        }
        description
      }
    }
  }
}
`;

export const ABOUT_PAGE = `
query About {
    about {
      data {
        attributes {
          weWorkText
          missionSection {
            description_1
            description_2
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          headerSection {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          callToAction {
            headline
            image {
              data {
                attributes {
                  url
                }
              }
            }
            title
          }
          weWorkSection {
            description
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const TEAM_PAGE = `
query TeamPage {
    teamPage {
      data {
        attributes {
          headerSection {
            image {
              data {
                attributes {
                  url
                }
              }
            }
            title
          }
          teams {
            description
            designation
            name
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const REVIEW_PAGE = `
query ReviewsPage {
    reviewsPage {
      data {
        attributes {
          headerSection {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
          reviews {
            description
            designation
            name
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const BLOG_PAGE = `
query BlogPage {
    blogPage {
      data {
        attributes {
          headerSection {
            title
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ALL_BLOGS = `
query Blogs {
    blogs {
      data {
        attributes {
          createdAt
          description
          slug
          title
          content
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        id
      }
    }
  }
`;

export const ALL_EVENTS = `
query Events {
 events {
    data {
      attributes {
        Link
        banner {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  }
`;

export const LIST_COUNTRIES = `
query Contries {
  countries {
    data {
      id
      attributes {
        name
        route
        
      }
    }
  }
}

`;

export const SINGLE_BLOGS = `
query Blog($id: ID!) {
  blogs(filters: { id: { eq: $id } }) {
    data {
      attributes {
        createdAt
        description
        slug
        title
        content
        image {
          data {
            attributes {
              url
            }
          }
        }
        SEO {
          title
          metaDescription
          focusKeywords
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
      id
    }
  }
}
`;

export const SINGLE_COUNTRY = `
query Country($id: ID!) {
  countries(filters: { id: { eq: $id } }) {
    data {
      id
            attributes {
        name
        route
        title
        description
        statsSection {
          description1
          description2
          description3
          heading1
          heading2
          heading3
          id
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        successSection {
          description1
          description2
          description3
          description4
          id
          text1
          text2
          text3
          text4
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        requirementSection {
          title
          description
          id
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        faqSection {
          title
          id
          faq {
            question
            answer
            id
          }
        }
        processSection {
          description1
          description2
          description3
          description4
          id
          text1
          text2
          text3
          text4
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
        featuredSection {
          title
          id
          features {
            title
            description
            id
          }
        }
      }
    }
  }
}
`;



export const CONTACT_PAGE = `
query ContactPage {
  contactPage {
    data {
      attributes {
        faq {
          question
          answer
        }
        location {
          address
          email
          title
          phone
        }
      }
    }
  }
}
`;

