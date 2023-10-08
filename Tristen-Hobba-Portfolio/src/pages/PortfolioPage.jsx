// import Chakra classes
import {
  Grid,
  GridItem,
  Card,
  CardBody,
  CardHeader,
  Icon,
} from "@chakra-ui/react";
// icons
import { AiFillGithub } from "react-icons/ai";

// import images
import theTechBlogImage from "../assets/images/the-tech-blog.png";
import yourRecipeBookImage from "../assets/images/your-recipe-book.png";
import travelExplorerImage from "../assets/images/travel-explorer.png";
import weatherForcastImage from "../assets/images/5-day-weather-forecast.png";
import workDaySchedulerImage from "../assets/images/work-day-scheduler.png";
import codingQuizImage from "../assets/images/coding-quiz.png";

// array of project data
const projects = [
  {
    name: "The Tech Blog",
    image: theTechBlogImage,
    github: "https://github.com/Tristenh/the-tech-blog",
    href: "https://tristen-the-tech-blog-5fd2bf5771e2.herokuapp.com/",
  },
  {
    name: "Your Recipe Book",
    image: yourRecipeBookImage,
    github: "https://github.com/Tristenh/your-recipe-book",
    href: "https://your-recipe-book-985222554f68.herokuapp.com/",
  },
  {
    name: "Travel Explorer",
    image: travelExplorerImage,
    github: "https://github.com/Tristenh/Travel-Explorer",
    href: "https://tristenh.github.io/Travel-Explorer/",
  },
  {
    name: "5 Day Weather Forcast",
    image: weatherForcastImage,
    github: "https://github.com/Tristenh/5-day-weather-forecast",
    href: "https://tristenh.github.io/5-day-weather-forecast/",
  },
  {
    name: "Work Day scheduler",
    image: workDaySchedulerImage,
    github: "https://github.com/Tristenh/work-day-scheduler",
    href: "https://tristenh.github.io/work-day-scheduler/",
  },
  {
    name: "Tristen's Coding Quiz",
    image: codingQuizImage,
    github: "https://github.com/Tristenh/Tristens-Coding-Quiz",
    href: "https://tristenh.github.io/Tristens-Coding-Quiz/",
  },
];
// export PorfolioPage
export default function PortfolioPage() {
  return (
    <>
      {/* responsive grid design */}
      <Grid
        templateRows={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
      >
        {/* map over projects array, include key index */}
        {projects.map((project, index) => (
          // individual grid item with card inside
          <GridItem key={index}>
            <Card>
              <CardHeader>
                <a href={project.github}>
                  <h2>
                    <Icon
                      as={AiFillGithub}
                      boxSize={{ base: "50px", md: "75px" }}
                    ></Icon>
                    {project.name}
                  </h2>
                </a>
              </CardHeader>
              <CardBody>
                <p>Deployed Application:</p>
                <a href={project.href}>
                  <img src={project.image} alt={project.name} />
                </a>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  );
}
