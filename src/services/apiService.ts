// getting Rooms data
export const getAllRoom = async () => {
    try {
        const response = await fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
        if(!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }

        const data = await response.json()
        return data;
    } 
    catch(err) {
        console.error(`Fetch error`)
        return err
    }
}

// getting rooms info by id
export const getRoomById = async (id:number) => {
    try {
        const response = await fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.error(`Fetch error`)
        return err
    }
}


// get room by roomtype
export const getRoomTypes = async () => {
    try {
        const response = await fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes")
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.error(`Fetch error`)
        return err
    }
}

// gets hotels data
export const getAllHotel = async () => {
    try {
        const response = await fetch("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.error(`Fetch error`)
        return err
    }
}

// gets hotel by id
export const getHotelById = async (id:number) => {
    try {
        const response = await fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (err) {
        console.error(`Fetch error`)
        return err
    }
}
