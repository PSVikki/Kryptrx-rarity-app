const config = {
    app_name: 'Poochain Rarity App',
    app_description: 'Poochain Rarity App is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'poo.json',
    collection_contract_address: '0x838B3A1f616EDb8B6d6a4C647c88E4a3B537489e',
    collection_name: 'Poochain Genesis NFTs',
    collection_description: 'PooChain Genesis Collection is a high quality collection of 10,000 $POOP emoji NFTs giving exclusive rights to Founders to enter our DAO and be apart of Governance on PooChain Blockchain.',
    collection_id_from: 1,
    ignore_traits: ['date'],
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://nft.poochain.co/assets/img/poochain.png',
    item_path_name: 'POOPNFT',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;
