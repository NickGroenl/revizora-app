'use client';
import { getUser } from "@/app/api/userr/call";
import SideBarComponent from "@/components/panel/sidebar"
import { UserModel } from "@/models/user.model";
import IonIcon from "@reacticons/ionicons"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import '../../home/index.css';
const LayoutViewClientWorkShop = ( ) => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>();
    const [user, setUser] = useState<UserModel>(null);

    const toUser = async () => {
        const userr = await getUser();
        if(userr === undefined || userr === null){
              router.push('/');
        }
        if(userr?.type !== 'workshop'){
            router.push('/provider/home');
        }
        setUser(userr);
      }
    useEffect(() => {
        toUser();
    }, []);
    return <div>
        {user === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> :
            <SideBarComponent user={user} route='/workshop/clients' frameContennt={
                <div>
                    <div className="flex between">
                        <h1 className="headerSideBar"> Clientes</h1>
                        <div style={{background: 'white'}}>
                            <button onClick={() => router.push('/workshop/clients')} className="btn-back mr1 mt1"><IonIcon name="arrow-back-outline"/></button>
                        </div>
                    </div>
                    <div className="p1">
                        <h1 className="subtitle">Cliente #21</h1>
                        <div className="card p1 mt1">
                            <div className="flex displayBlockResponsive w100">
                                <div className="flex w100 mr1 mt1">
                                    <p className="formTitle w100">Nombre</p>
                                    <input className="inputForm mr1 ml1" type="text" placeholder="Jorge"/>
                                </div>
                                <div className="flex w100 mt1">
                                    <p className="formTitle w100">Apellido</p>
                                    <input className="inputForm mr1 ml1 " type="text" placeholder="Perez"/>
                                </div>
                            </div>
                            <div className="flex displayBlockResponsive mt1 w100">
                                <div className="flex w100 mr1 mt1">
                                    <p className="formTitle w100">Celular</p>
                                    <input className="inputForm mr1 ml1" type="text" placeholder="+51 984751364"/>
                                </div>
                                <div className="flex w100 mt1">
                                    <p className="formTitle w100">Correo</p>
                                    <input className="inputForm mr1 ml1" type="email" placeholder="jorge@stockeado.com"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex between mt1 displayBlockResponsive">
                            <div className="card mt1 flex between p1 w100 mr1">
                                <p className="subsubtitle w100">Vehículos asociados:</p>
                                <div className="w100 right">
                                    <button className="btn-link w100">BMW 320i - ANZ123</button>
                                    <button className="btn-link w100 mt05">BMW 320i - ANZ123</button>
                                </div>
                            </div>
                            <div className="card mt1 flex between p1 w100">
                                <p className="subsubtitle w100">Último servicio:</p>
                                <div className="w100 right">
                                    <button className="btn-link w100">Orden de servicio #21</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex between mt1 displayBlockResponsive">
                            <div className="card mt1 flex between p1 w100 mr1">
                                <p className="subsubtitle w100">Inspecciones:</p>
                                <div className="w100 right">
                                    <button className="btn-link w100">Inspección #21</button>
                                    <button className="btn-link w100 mt05">Inspección #25</button>
                                    <button className="btn-link w100 mt05">Inspección #34</button>
                                </div>
                            </div>
                            <div className="card mt1 flex between p1 w100">
                                <p className="subsubtitle w100">Recordatorios:</p>
                                <div className="w100 right">
                                    <button className="btn-link w100">100 000 km - ANZ123</button>
                                    <button className="btn-link mt05 w100">Cambio de aceite</button>
                                    <button className="btn-link mt05 w100">Cambio de neumaticos</button>
                                </div>
                            </div>
                        </div>
                        <div className="center w100 mt2">
                            <button className="btn-gradient-primary">Guardar cambios</button>
                        </div>
                    </div>
                </div>
            }/>
        }
    </div>
}
export default LayoutViewClientWorkShop;