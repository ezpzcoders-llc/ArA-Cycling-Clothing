import { useSelector } from 'react-redux'
import { RootState } from '@/lib/redux/store'

import { StyledLandingView } from './StyledLandingView'

const LandingView = () => {
    const data = useSelector((state: RootState) => state.homePage)
    const {
        heroBanner,
        heroImg: { altText, src }
    } = data

    return (
        <StyledLandingView>
            <div className="heroContainer">
                <img src={src} alt={altText} srcSet={src} className="heroImg" />
                <h1 className="heroBanner">{heroBanner}</h1>
            </div>
            <div className="productContainer">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae enim similique sit beatae ipsam reiciendis ab
                voluptatibus dignissimos illum veritatis accusantium atque quod
                placeat, aperiam quam ipsa aliquam nobis fugit ex, saepe magni
                rem! Nam quam odit, nobis quo aliquid voluptatum alias natus ab
                non quasi dolore in molestias sapiente eaque, est similique! Sit
                quam natus magnam incidunt repellat atque vero iure cum!
                Accusantium, quasi culpa et porro optio rerum, aliquam, dolores
                facere dolorem sunt fugit. Saepe vel quaerat nulla molestias
                nostrum, blanditiis veniam recusandae modi enim velit fugiat ut
                dolor, excepturi architecto deserunt aliquid ipsum libero fugit?
                Animi maiores ut necessitatibus possimus quos laborum eum itaque
                placeat, explicabo eveniet vitae a, doloremque voluptatibus. In
                perspiciatis vel eum atque pariatur. Nulla fugit unde ducimus
                aspernatur maiores facilis itaque iure, in a eius asperiores,
                consequatur quo, adipisci aliquam numquam aperiam debitis sit
                repellat necessitatibus porro ratione totam! Ratione enim,
                mollitia tenetur temporibus asperiores, quis rem soluta
                laudantium iure tempore molestias doloremque reiciendis
                aspernatur consequatur? Pariatur cumque culpa eos molestias
                dolores esse voluptatum, dolor quod beatae deleniti officiis
                tempore vel quos harum quam nulla velit odit illo enim nesciunt
                nam, explicabo ullam officia quas? Pariatur a natus accusantium
                distinctio delectus possimus sint rerum ipsam architecto
                voluptatibus, dolorem odit laboriosam sit saepe itaque libero!
                Aspernatur perferendis repellat quo suscipit quod, id iste
                aliquid totam nesciunt, aperiam debitis necessitatibus
                distinctio. Soluta odit fuga maiores qui, molestias dolorem,
                architecto quasi amet, quos voluptatum nam voluptatem
                accusantium. Necessitatibus illum sed exercitationem ab iusto
                deserunt cum maxime natus ea pariatur quisquam deleniti,
                consequuntur voluptates ducimus excepturi, consectetur quos
                suscipit voluptatibus eius quae fugit placeat mollitia enim in?
                Facilis blanditiis atque autem dicta perferendis natus,
                asperiores ratione, expedita fugit nobis magnam culpa omnis
                commodi, nam at aperiam temporibus eius voluptatibus nesciunt
                deleniti soluta. Libero placeat itaque consequuntur laudantium!
            </div>
        </StyledLandingView>
    )
}

export default LandingView
