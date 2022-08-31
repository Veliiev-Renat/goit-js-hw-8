import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryRef = document.querySelector('.gallery')


    const gallery = galleryItems.map((picture)=>`
    <a class="gallery__item" href="${picture.preview}">
    <img class="gallery__image" src="${picture.original}" alt="${picture.description}" />
    </a>
        `).join('')
       

        galleryRef.innerHTML = gallery
        

        galleryRef.addEventListener('click',(event)=>{
            event.preventDefault()
        if(event.target.nodeName !=='IMG'){
            return
        }   
        
        var lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250 });
        })
