// 1. Create a length converter function


function lengthConverter(length, conversionType) {
    let result;
    
    if (conversionType === "metersToFeet") {
      result = length * 3.28084; // 1 meter = 3.28084 feet
      return result;
    } else if (conversionType === "feetToMeters") {
      result = length / 3.28084; // 1 foot = 0.3048 meters
      return result;
    } else {
      return "Invalid conversion type. Please use 'metersToFeet' or 'feetToMeters'.";
    }
  }
  
  console.log(lengthConverter(5, "metersToFeet")); 
  console.log(lengthConverter(10, "feetToMeters")); 
  console.log(lengthConverter(15, "invalidType")); 
  