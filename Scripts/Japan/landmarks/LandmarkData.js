let landmarkCollection = [
  { 
        landmarkName: "Himeji Castle" ,
        image: "himejicastle.jpg",
    },
    { 
        landmarkName: "Naoshima" ,
        image: "naoshima.jpg",
    },
    { 
        landmarkName: "Tokyo Tower" ,
        image: "tokyotower.jpg",
    },
 
]


export const getLandmarks = () => {
	return landmarkCollection;
}