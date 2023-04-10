package com.example.Backend.services;

import com.example.Backend.entities.User;
import com.example.Backend.entities.Role;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.stream.Collectors;

@Service
public class JwtService {

    private long validTimeInMillis = 30 * 60 * 1000;
    private byte[] secretKey = "ZGMmcFxm9xx3kyIkkK1RTE2gRgqlvVPHwxAkWLIRy+S9WVZkI8uyjtyfnf7HVi/rGefakLdTrxrKGZGZeeYyww==".getBytes();

    public String createToken(User user) {

        Date now = new Date();

        return Jwts.builder()
                .setAudience("front-end")
                .setIssuer("Back-end")
                .setSubject(user.getEmail())
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + validTimeInMillis))
                .claim("roles", user.getRoles().stream()
                        .map(Role::getRole)
                        .collect(Collectors.toSet())
                )
                .signWith(Keys.hmacShaKeyFor(secretKey), SignatureAlgorithm.HS512)
                .compact();
    }

}