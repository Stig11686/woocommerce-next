import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const api = new WooCommerceRestApi({
    url: 'https://millliefoxcakes.bvswebdesign.co.uk/',
    consumerKey: 'ck_948e16650f71291dc55b5c3db4552f604d858a9f',
    consumerSecret: 'cs_e2535478acea5e7f65839ffd88043eef611b2f1f'
});

export async function fetchWooCommerceProducts(){
    try {
        const response = await api.get("products");
        return response;
    } catch(err){
        throw new Error(err);
    }
}