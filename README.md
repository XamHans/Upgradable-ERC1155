# Upgradable ERC1155

If you are using Upgradable Contracts, you must use initialize() instead of constructor.

```
 function initialize() public initializer {
        __ERC1155_init("https://ipfs.moralis.io:2053/ipfs/metadata/{id}.json");
        __UUPSUpgradeable_init();
    }

```