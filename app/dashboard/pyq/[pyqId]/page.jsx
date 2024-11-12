"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { db } from "@/utils/db";
import { Question } from "@/utils/schema";
import { eq } from "drizzle-orm";

const page = (props) => {
  const params = props.params;  // Access directly without `use()`
  const [questionData, setQuestionData] = useState();

  useEffect(() => {
    console.log(params.pyqId);
    getQuestionDetails();
  }, []);

  // const getQuestionDetails = async () => {
  //   try {
  //     const result = await db
  //       .select()
  //       .from(Question)
  //       .where(eq(Question.mockId, params.pyqId));
        
  //     // Check if result and MockQuestionJsonResp exist
  //     if (result.length > 0 && result[0].MockQuestionJsonResp) {
  //       const questionData = JSON.parse(result[0].MockQuestionJsonResp);
  //       console.log("Raw JSON data:", result[0].MockQuestionJsonResp);
  //       setQuestionData(questionData);
  //     } else {
  //       console.error("No data found or MockQuestionJsonResp is undefined");
  //     }
  //   } catch (error) {
  //     console.error("Error parsing JSON:", error);
  //   }
  // };
  // page.jsx (revised getQuestionDetails function)

const getQuestionDetails = async () => {
  try {
    const result = await db
      .select()
      .from(Question)
      .where(eq(Question.mockId, params.pyqId));

    if (result.length > 0 && result[0].MockQuestionJsonResp) {
      const rawData = result[0].MockQuestionJsonResp;
      console.log("Raw JSON data:", rawData);

      // Try parsing the JSON response
      try {
        const questionData = JSON.parse(rawData);
        setQuestionData(questionData);
      } catch (parseError) {
        console.error("Failed to parse MockQuestionJsonResp:", parseError);
        alert("The retrieved data format is invalid. Please try again later.");
      }
    } else {
      console.error("No data found or MockQuestionJsonResp is undefined");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

  

  return (
    questionData && (
      <div className="p-10 my-5">
        <Accordion type="single" collapsible>
          {questionData.map((item, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index} className="mb-5">
              <AccordionTrigger>{item?.Question}?</AccordionTrigger>
              <AccordionContent>{item?.Answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  );
};

export default page;
