import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

const Navbar: React.FC = (): JSX.Element => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  console.log(data, fetching);

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <Box ml={"auto"}>
          <NextLink href="/login">
            <a style={{ color: "white", marginRight: 20 }}>Login</a>
          </NextLink>
          <NextLink href="/register">
            <a style={{ color: "white", marginRight: 20 }}>Register</a>
          </NextLink>
        </Box>
      </>
    );
  } else {
    body = <Box>{data.me.username}</Box>;
  }
  return (
    <Flex bg="tomato" p={4}>
      {/* {body} */}
      <Box ml={"auto"}>
        <NextLink href="/login">
          <a style={{ color: "white", marginRight: 20 }}>Login</a>
        </NextLink>
        <NextLink href="/register">
          <a style={{ color: "white", marginRight: 20 }}>Register</a>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
