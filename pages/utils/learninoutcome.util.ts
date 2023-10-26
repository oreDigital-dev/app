import { ShortCourseLearingOutcomeType } from "@/types/shortcourse.learningoutcome.type";

export const objectWithMostLearningOutcomes = (
  learningOutcomeObjects: ShortCourseLearingOutcomeType[]
): ShortCourseLearingOutcomeType => {
  return learningOutcomeObjects.reduce((maxObject, currentObject) => {
    if (
      currentObject.learningOutcomes.length > maxObject.learningOutcomes.length
    ) {
      return currentObject;
    } else {
      return maxObject;
    }
  }, learningOutcomeObjects[0]);
};
