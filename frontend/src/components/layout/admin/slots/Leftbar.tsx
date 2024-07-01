import { useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.css";

import {
    Button,
    Menu,
    MenuDetails,
    MenuItem,
    MenuTitle,
    Modal,
    ModalActions,
    ModalBody,
    ModalHeader,
} from "@/components/daisyui";

import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import { getActivatedLeftbarParentKeys } from "@/helpers/layout/admin/leftbar";
import { cn } from "@/helpers/utils/cn";
import routes from "@/services/routes";
import { IMenuItem } from "@/types/layout/admin";

const ProBadge = ({ url }: { url: string | undefined }) => {
    return (
        <>
            {url != "/" && !url?.includes("/docs") && (
                <div className="ms-0 rounded bg-base-content/10 px-1.5 py-[3px] text-[12px]/none opacity-70">Pro</div>
            )}
        </>
    );
};

const LeftMenuItem = ({
    menuItem,
    activated,
    purchaseClickCallback,
}: {
    menuItem: IMenuItem;
    activated: Set<string>;
    purchaseClickCallback: any;
}) => {
    const { icon, isTitle, label, children, url } = menuItem;

    const selected = activated.has(menuItem.key);

    if (isTitle) {
        return <MenuTitle className="font-semibold">{label}</MenuTitle>;
    }

    if (!children) {
        return (
            <MenuItem>
                <Link
                    to={url ?? ""}
                    onClick={() => url == null && purchaseClickCallback()}
                    className={cn("hover:bg-base-content/15", {
                        "bg-base-content/10": selected,
                    })}>
                    <div className="flex items-center gap-2">
                        {icon && <Icon icon={icon} fontSize={18} />}
                        {label}
                        <ProBadge url={url} />
                    </div>
                </Link>
            </MenuItem>
        );
    }

    return (
        <MenuItem>
            <MenuDetails
                open={selected}
                label={
                    <div className="flex items-center gap-2">
                        {icon && <Icon icon={icon} fontSize={18} />}
                        {label}
                        <ProBadge url={url} />
                    </div>
                }>
                {children.map((item, index) => (
                    <LeftMenuItem
                        menuItem={item}
                        key={index}
                        activated={activated}
                        purchaseClickCallback={purchaseClickCallback}
                    />
                ))}
            </MenuDetails>
        </MenuItem>
    );
};

const Leftbar = ({ hide, menuItems }: { hide?: boolean; menuItems: IMenuItem[] }) => {
    const purchaseModal = useRef<HTMLDialogElement>(null);

    const { pathname } = useLocation();

    const onPurchaseClick = () => {
        purchaseModal.current?.showModal();
    };

    const activatedParents = useMemo(() => new Set(getActivatedLeftbarParentKeys(menuItems, pathname)), [pathname]);

    return (
        <div
            className={cn("leftmenu-wrapper", {
                hide: hide,
            })}>
            <div className="flex h-16 items-center justify-center">
                <Logo />
            </div>
            <SimpleBar className="h-[calc(100vh-64px)] lg:h-[calc(100vh-230px)] ">
                <Menu className="mb-6">
                    {menuItems.map((item, index) => (
                        <LeftMenuItem
                            menuItem={item}
                            key={index}
                            activated={activatedParents}
                            purchaseClickCallback={onPurchaseClick}
                        />
                    ))}
                </Menu>
            </SimpleBar>

            <div className={"mx-4 hidden rounded bg-base-200 px-3 py-4 lg:block"}>
                <p className="text-center text-base font-medium">Need Premium?</p>
                <p className="mt-3 text-center text-sm">Access all features with single time purchase</p>
                <div className="mt-3 text-center">
                    <Link to={routes.purchase} target="_blank">
                        <Button color={"primary"} size={"sm"}>
                            Purchase
                        </Button>
                    </Link>
                </div>
            </div>

            <Modal ref={purchaseModal}>
                <ModalHeader className="font-medium">Upgrade</ModalHeader>
                <ModalBody>
                    Need All Features and Pages? You need to buy standard or pro to access full version
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="ghost">Close</Button>
                    </form>
                    <Link to={routes.purchase} target="_blank">
                        <Button color="primary">Purchase Now</Button>
                    </Link>
                </ModalActions>
            </Modal>
        </div>
    );
};

export default Leftbar;
