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
          addressDelhi
          addressDubai
          description
          email
          phone1
          phone2
          phone3
          phone4
          website_routes {
            data {
              attributes {
                name
                url
              }
            }
          }
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

export const CONTACT_PAGE = `
query ContactPage {
  contactPage {
    data {
      attributes {
        address
        contact
        description
        timing
      }
    }
  }
}
`;
