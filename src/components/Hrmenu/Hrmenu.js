import React from 'react'
import SideMenu from '../sidebar/SideBar'
import SubHead from '../Header/SubHead'
import "./hrmenu.css"
import { Link } from 'react-router-dom'

const Hrmenu = () => {
    return (
        <div className='row'>
            <SubHead />
            <div className=' ' style={{ width: "9%" }}>

                <SideMenu />
            </div>
            <div className="___11eoy74 f1t45kew fly5x3f f10pi13n mt-5" bis_skin_checked="1" style={{ width: "80%" }}>
                <Link to="/hrservice" >

                    <div role="link" aria-label=" Calendar. Manage and share your schedule.. " tabindex="0" className="fui-Card ___qoe7lo0 f1p9o1ba f1sil6mw fnivh3a fc7yr5o f1el4m67 f8yange f1lplnzb f10m5gbb fhftqfp f1k04kkk fqrbt79 fe5j3v f22iagw f10pi13n f1ewtqcl f19n0e5 f1mdlcz9 frwkxtg f1n6gb5g f15yvnhg fo72kxq f13zj6fq f1nwj1ja f8rth92 flthirb f1lh990p ftkbnf5 f6czdpx f13hvwk3 f1i1u9k0 f1en4csx f1qnomq5 f2fl922 f1anhtl f1n2zcl3 f16v3d5c f1su8t2g f1vx9l62 fobhde4 fx5r7kn f19chtn8 fuvs6re fy4glsf f1qua4xo fimkt6v fxugw4r f1whvlc6 f16gxe2i fpgykix f1osi826 fzybk4o f1k6fduh f1knas48 f1m145df fexrx97 ftqa4ok fuzedg2 f8hki3x f1d2448m f1bjia2o ffh67wi f15bsgw9 f14e48fq f18yb2kv fd6o370 fh1cnn4 fy7oxxb fpukqih f184ne2d f99gebs f13b0oaq f1jvq617 f8t2bz6 f11unbnk fbd201q f12nqxso f1uguk4w f1dvezut fd0oaoj fjvm52t f1cwg4i8 f15fr7a0 fwsq40z f34ld9f fy0y4wt fpfvv3l f1oamsm6 f1il21bs fnn5dk0 fey3rwa f5jhx11 fm7n0jy fff9uym f1p3adqs fy0dxe2 f1gazwyt f8egfay femsvqq f1f36hpc" data-testid="more-m365-apps-Calendar" bis_skin_checked="1"><div className="fui-CardHeader ___4smi3m0 fkufhic f13qh94s f8a668j f122n59 fbhnoac f4h39za faonqo7 f1yqtrj9 f11t4yos f1gss93v f3iroo0 f10nd6rd fzwxc6s f19zco51" bis_skin_checked="1" style={{
                        display: " flex",
                        alignItems: "center"
                    }}><div className="fui-CardHeader__image ___c1l6a60 ftuwxu6 fql5097 fwpfdsa fldnz9j" bis_skin_checked="1" >
                            <div className="o365cs-base ___15yakyp f22iagw f4d9j23 f122n59 f5ogflp f1hqa2wf f1f09k3d finvdd3 fzkkow9 fcdblym fg706s2 fjik90z fj3muxo f1akhkt f1aperda f1lxtadh fdj1zya f2lho3y f1fmhecp f1dca9dy" bis_skin_checked="1"><i data-icon-name="Placeholder" aria-hidden="true" className="ms-Icon root-32 ms-Icon--Calendar ms-svg-Icon ___1300djx f1rt2boy" style={{ color: "rgb(0, 114, 198)" }}></i></div></div><div className="fui-CardHeader__header ___11rfdfp fd46tj4 f16hsg94 f22iagw" id="ohp-fui-CardHeader__header208" bis_skin_checked="1"><span aria-hidden="true" className="fui-Body1 fui-Text ___nzdt000 fk6fouc fkhj508 f1i3iumi figsok6 fpgzoln f1w7gpdv f6juhto f1mtd64y f1y7q3j9 f2jf649"><h4 className="mx-2 fui-Text ___tmwg1s0 fk6fouc fkhj508 f1i3iumi fl43uef fpgzoln fw-bold f1rvi9lw f6juhto f1p9o1ba f1sil6mw f2jf649 fi1h9r9 fftbqpi" title="Calendar" style={{ marginTop: "5px" }}>Candidate</h4></span></div><div className="fui-CardHeader__action ___yyk5ks0 f6yss9k fis13di fldnz9j" bis_skin_checked="1"></div></div><div aria-hidden="true" className="___dljzgu0 f1p9o1ba f1sil6mw f1rvi9lw fi1h9r9 f1h500bm f1cmbuwj f1ugzwwg f104wqfl f1nxs5xn" bis_skin_checked="1">Find the Best Candidates.</div></div>
                </Link>
            </div>
        </div>
    )
}

export default Hrmenu