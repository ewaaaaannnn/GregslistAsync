export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }



  get Card() {
    return `
         <div class="col-md-6">
         <div class="card shadow-sm">
           <img class="card-img p-2"
             src="${this.imgUrl}"
             alt="">
           <div class="card-body">
             <p class="text-center fw-bold">
               Bathrooms :${this.bathrooms} Bedrooms :${this.bedrooms} Built: ${this.year}
             </p>
             <p class="mb-0">
               Levels: ${this.levels} | Price :${this.price}
             </p>
             <p>${this.description}</p>
             <div class="d-flex justify-content-between">
              <p>${this.CreatedAtFormatted}</p>
              <div>
                <span>${this.creator.name}</span>
                <img class="profile-picture profile-picture-sm" src="${this.creator.picture}" alt="A beautiful picture of ${this.creator.name}"/>
              </div>
             </div
           </div>
         </div>
       </div>
    `
  }
}