import * as Mock from "./Mock";
import ServiceResponse from "./ServiceResponse";

interface PropertyService {
  getPropertyList(): Promise<ServiceResponse>;
}
const Service: PropertyService = {

  getPropertyList:async () => {
    const response = { data: Mock.properties }
    const rtn: ServiceResponse = {
      success: true,
      data: response.data
    }
    return rtn;
  }

}

export default Service;