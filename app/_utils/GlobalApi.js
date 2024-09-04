import { gql, request } from 'graphql-request';

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/" + process.env.NEXT_PUBLIC_HYGRAPH_API_KEY + "/master";

const getAllCourseList = async () => {
  const query = gql`
   query MyQuery {
    courseLists {
      id
      name
      free
      youtubeUrl
      banner {
        url
      }
      slug
    }
  }
  `;
  
  const result = await request(MASTER_URL, query);
  return result;
};

const getSideBanner = async () => {
  const query = gql`
    query GetSideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;
  
  const result = await request(MASTER_URL, query);
  return result;
};
const getCourseById=async(courseId)=>{
  const query=gql`
  query MyQuery {
    courseList(where: {slug: "`+courseId+`"}) {
      id
      name
      free
      youtubeUrl
      author
      banner {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;
}

const enrollToCourse=async(courseId,email)=>{
  const query=gql`
  mutation MyMutation {
    createUserEnrollCourse(
      data: {userEmail: "`+email+`", courseId: "`+courseId+`", courseList: {connect: {slug: "`+courseId+`"}}}
    ) {
      id
    }
  }`
  const result = await request(MASTER_URL, query);
  return result;
  
}
export {
  getAllCourseList,
  getSideBanner,
  getCourseById,
  enrollToCourse
};
