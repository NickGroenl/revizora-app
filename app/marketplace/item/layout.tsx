'use client';
import { getInventoryById, getMarketPlace } from '@/app/api/inventory/call';
import { getUser, getUserById } from '@/app/api/user/call';
import HeaderMarketPlace from '@/components/marketplace/header';
import { InventoryModel } from '@/models/inventoryModel';
import { CartProps } from '@/models/ordersModel';
import { UserModel } from '@/models/userModel';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import './index.css';
import IonIcon from '@reacticons/ionicons';
import { TypeBrands } from '@/models/brands';
import Link from 'next/link';
const LayoutMarketPlaceItem = () => {
    const search = useSearchParams();
    const id = search.get('id');
    const [cart, setCart] = useState<CartProps[]>([]);
    const [item, setItem] = useState<InventoryModel>();
    const [shop, setShop] = useState<UserModel>(null);
    const [ammount, setAmmount] = useState<number>(0);

    const getData = async() => {
        const responseItem = await getInventoryById(id);
        const responseShop = await getUserById(responseItem?.owner_id);
        setItem(responseItem);
        setShop(responseShop);
    }
    const router = useRouter();
    const shopCart = () => {
        if(ammount > 0){
            const cartCast = [...cart, {
                item: item ?? {},
                ammount: ammount
            }];
            setCart(cartCast as CartProps[]);
            sessionStorage.setItem("cart", String(JSON.stringify(cartCast)));
            router.push('/marketplace/payment');
        }
    }
    const addToCart = () => {
        if(ammount > 0){
            const cartCast = [...cart, {
                item: item ?? {},
                ammount: ammount
            }];
            setCart(cartCast as CartProps[]);
            sessionStorage.setItem("cart", String(JSON.stringify(cartCast)));
        }
        
    }
    useEffect(() => {
        getData();
        const cartCast = JSON.parse(sessionStorage.getItem("cart"));
        if(cartCast !== undefined) setCart(cartCast ?? []);
    }, []);
    return <div>
        <HeaderMarketPlace cartItems={cart} setCart={setCart}/>
        {shop === null ? <IonIcon name='chevron-collapse-outline' className="rotateItem" color='#1366D9' style={{fontSize: '1.5rem', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/> : 
        <div className="viewitem">
        <div style={{paddingRight: 'auto', paddingLeft: 'auto', marginTop: '7rem'}}>
            <p style={{color: 'grey', fontSize: '.8rem', marginBottom: '1rem'}}> MarketPlace {'> ' + shop?.nameShop}</p>
        </div>
        <div className="cardImage displayBlockResponsive">
            <div style={{display: 'flex', width: '100%'}} className='displayBlockResponsive'>
                <div>
                    <img  style={{maxWidth: '350px' , minHeight: '250px', border: '1px solid rgba(128, 128, 128, 0.219', borderRadius: '.8rem'}} src={item?.image} alt="Image Item"/>

                </div>
                <div style={{width: '100%', padding: '1rem'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <p style={{color: 'green', fontSize: '.8rem'}}><IonIcon name="checkmark-outline"/> En stock {'(' + item?.ammount + ')'}</p>
                        <p style={{color: 'grey', fontSize: '.8rem'}}> SKU: {item?.sku}</p>
                    </div>
                    <p style={{fontWeight: '500', fontSize: '1.1rem', marginTop: '1rem'}}>{item?.name} {(TypeBrands[(item?.brand) ?? 0] + '') ?? ''} {item?.model ?? '' }</p>
                    <p style={{color: 'grey', fontSize: '.8rem', marginTop: '1rem'}}>Vendido por: <Link style={{cursor: 'pointer', marginLeft: '.5rem', color: '#0E7AFF'}} href={'https://stockeado-mvp.vercel.app/marketplace/shop?id=' + shop?._id}>{shop?.nameShop}</Link></p>
                    <p style={{fontWeight: '500', fontSize: '1.2rem', marginTop: '1rem'}}>s/. {Number(item?.priceSelling).toFixed(2) ?? 0}</p>
                    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '100%', height: '1px', marginTop: '1rem'}}></div>
                    <p style={{color: 'grey', fontSize: '.9rem', marginTop: '1rem'}}>Marca: <span style={{cursor: 'pointer', marginLeft: '.5rem', color: 'black'}}>{TypeBrands[item?.brand] ?? 'No definido'}</span></p>
                    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.1)', width: '100%', height: '1px', marginTop: '1rem'}}></div>
                    <p style={{color: 'grey', fontSize: '.9rem', marginTop: '1rem'}}>Número de parte: <span style={{cursor: 'pointer', marginLeft: '.5rem', color: 'black'}}>{item?.sku ?? 'No definido'}</span></p>
                    <p style={{color: 'grey', fontSize: '.9rem', marginTop: '1rem'}}>Aplica para: <span style={{cursor: 'pointer', marginLeft: '.5rem', color: 'black'}}>{TypeBrands[item?.brand ?? 0] ?? 'No definido'}</span></p>

                </div>
            </div>
            <div >
                <div style={{border: '1px solid rgba(128, 128, 128, 0.219 !important', borderRadius: '.5rem', padding: '1rem', minWidth: '180px'}}>
                    <p>Cantidad</p>
                    <input
                    value={String(ammount)}
                    onChange={(e) => setAmmount(Number(e.target.value))}
                    type="number"
                    max={Number(item?.ammount)}
                    min={0}
                    name="name"
                    placeholder=""
                    className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-3 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                    style={{padding: '.5rem', borderLeft: 'transparent', borderRight: 'transparent', borderTop: 'transparent'}}
                    />
                    <p style={{marginTop: '1rem', color: '#8B96A5', fontSize: '.8rem'}}>Lima, Perú</p>
                    <p style={{marginTop: '.5rem', color: '#8B96A5', fontSize: '.8rem'}}>Envío a domicilio</p>
                    <p style={{marginTop: '.5rem', color: '#8B96A5', fontSize: '.8rem'}}>Enviado por <span style={{fontWeight: '700'}}>Stockeado</span></p>
                    <button onClick={() => shopCart()} style={{marginTop: '1rem', borderRadius: '.5rem', backgroundColor: '#127FFF', padding: '.5rem', color: 'white', width: '100%'}}>Comprar ahora</button>
                    <button  onClick={() => addToCart()} style={{marginTop: '.5rem', borderRadius: '.5rem', backgroundColor: 'transparent', padding: '.5rem', color: '#127FFF', border: '1px solid rgba(0, 0,0, .2)', width: '100%'}}>Añadir al carrito</button>

                </div>
            </div>
        </div>
        <div style={{marginTop: '1rem', width: '80%', 
            backgroundColor: 'white',
            borderRadius: '.5rem',
            border: '1px solid rgba(128, 128, 128, 0.219)',
            padding: '1rem'}} className='w100Responsive'>
            <div style={{display: 'flex', width: '100%'}}>
                <p style={{color: '#0D6EFD', borderBottom: '1px solid #0D6EFD', width: '100%', padding: '.5rem'}}>Descripción del producto</p>
                <p style={{borderBottom: '1px solid grey', width: '100%', padding: '.5rem'}}>{}</p>
            </div>
            <p style={{ width: '100%', marginTop: '1rem', fontSize: '.9rem'}}>{item?.description ?? 'No se encontro una descripción'}</p>
            <div style={{boxSizing: 'border-box', width: '100%', marginTop: '1rem'}}>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%', backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        Marca
                    </p>
                    <p style={{width: '100%',backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>{(TypeBrands[(item?.brand) ?? 0] + '') ?? 'No definido'}</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        Modelo
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>{item?.model ?? 'No definido'}</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        Número de parte
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>{item?.sku ?? 'No definido'}</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        SKU
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>{item?.sku ?? 'No definido'}</p>
                </div>
                <div style={{display:'flex', width: '100%'}}>
                    <p style={{width: '100%',backgroundColor: '#EFF2F4', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)'}}>
                        Enviado por
                    </p>
                    <p style={{width: '100%', backgroundColor: 'transparent', padding: '.3rem', border: '1px solid rgba(0,0,0, 0.1)', fontWeight: '500'}}>Stockeado</p>
                </div>
            </div>
        </div>
    </div>}
        
        

    </div>
}
export default LayoutMarketPlaceItem;