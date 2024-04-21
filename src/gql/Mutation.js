const { gql } = require("@apollo/client");

const MakeOrder = gql`
    mutation Mutation(
        $carNumber: Float!, 
        $carText: String!, 
        $ownerName: String!, 
        $licenseImage: Upload!, 
        $carType: String!, 
        $arriveTime: String!, 
        $leaveTime: String!, 
        $reason: String!) {
        addOrder(carNumber: $carNumber, 
            carText: $carText, 
            ownerName: $ownerName, 
            licenseImage: $licenseImage, 
            carType: $carType, 
            arriveTime: $arriveTime, 
            leaveTime: $leaveTime, 
            reason: $reason) {
        arriveTime
        leaveTime
        carNumber
        carText
        carType
        }
    }
`

export { MakeOrder }